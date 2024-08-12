import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { YouTubeVideoListResponse } from 'app/shared/models/search-response.model';
import { CustomCard, VideoItem } from 'app/shared/models/search-item.model';
import { SearchItemComponent } from '../../components/search-item/search-item.component';
import { SortVideosPipe } from 'app/shared/pipe/sort-date-count.pipe';
import { FilterVideosPipe } from 'app/shared/pipe/filter-words.pipe';
import { FilterCustomCardsPipe } from 'app/shared/pipe/filter-words-custom.pipe';
import { SearchService } from 'app/youtube/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SortService } from 'app/youtube/services/sortsearch.service';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  takeUntil,
  filter,
  merge,
  map,
  Observable,
  tap,
} from 'rxjs';
import { FormControl } from '@angular/forms';
import { DEBOUNCE_TIME_MS } from 'app/shared/utils/utils';
import { loadVideos } from 'app/redux/actions/actions';
import { Store } from '@ngrx/store';
import { AppState, VideoState } from 'app/redux/state/app.state';
import { selectFilteredVideos } from 'app/redux/selectors/video.selectors';
import { CustomCardComponent } from 'app/youtube/components/custom-card/custom-card.component';
import { selectCustomCards } from 'app/redux/selectors/custom-card.selectors';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import { selectPaginationState } from 'app/redux/selectors/pagination.selectors';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SearchItemComponent,
    SortVideosPipe,
    FilterVideosPipe,
    CustomCardComponent,
    FilterCustomCardsPipe,
    FontAwesomeModule,
    CustomButtonComponent,
  ],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public videosData!: YouTubeVideoListResponse;
  public filteredVideos: VideoItem[] = [];
  public filteredCustomCards: CustomCard[] = [];
  public searchResultsVisible: boolean = false;
  private destroy$ = new Subject<void>();
  searchControl = new FormControl('');

  filteredVideos$!: Observable<VideoItem[]>;
  customCards$!: Observable<CustomCard[]>;
  customCards: CustomCard[] = [];

  public currentPage: number = 1; // Текущая страница
  public hasNextPage: boolean = false; // Флаг для наличия следующей страницы
  public hasPreviousPage: boolean = false; // Флаг для наличия предыдущей страницы

  faBackward = faBackward;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
    private sortService: SortService,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    // Проверка состояния хранилища при инициализации компонента
    this.store.subscribe((state) => {
      console.log('Current state:', state); // Выводим текущее состояние в консоль
    });

    this.customCards$ = this.store.select(selectCustomCards);

    // Проверка, что селектор `selectCustomCards` возвращает Observable
    console.log('Initialized customCards$:', this.customCards$);

    // Объединяем два потока данных в один
    const searchQuery$ = this.searchService.searchQuery$.pipe(
      debounceTime(DEBOUNCE_TIME_MS),
      filter((value) => value !== null && value.length > 2),
      distinctUntilChanged(),
    );

    const queryParams$ = this.route.queryParams.pipe(
      debounceTime(DEBOUNCE_TIME_MS),
      distinctUntilChanged((prev, curr) => prev['search'] === curr['search']),
      map((params) => params['search'] ?? ''),
    );

    merge(searchQuery$, queryParams$)
      .pipe(
        takeUntil(this.destroy$),
        tap((query: string) => {
          const safeValue = query ?? '';
          this.currentPage = 1;
          this.updateSearchQueryInURL(safeValue);
          this.store.dispatch(loadVideos({ query: safeValue }));
        }),
      )
      .subscribe();

    // Обновляем поток filteredVideos$ при изменении строки поиска
    this.filteredVideos$ = this.store.select(selectFilteredVideos(''));

    this.filteredVideos$
      .pipe(takeUntil(this.destroy$))
      .subscribe((videos: VideoItem[]) => {
        this.filteredVideos = videos;
        console.log(this.filteredVideos);
        // Обновляем видимость результатов поиска
        this.updateSearchResultsVisibility();
      });
    // Подписываемся на изменения customCards, если они существуют
    this.customCards$
      .pipe(takeUntil(this.destroy$))
      .subscribe((customCards: CustomCard[]) => {
        console.log('Received customCards:', customCards);
        this.filteredCustomCards = customCards || []; // Если customCards не определены, используем пустой массив
        console.log(this.filteredCustomCards);
        this.updateSearchResultsVisibility();
      });
    // Подписка на изменения состояния пагинации
    this.store
      .select(selectPaginationState)
      .pipe(takeUntil(this.destroy$))
      .subscribe((paginationState) => {
        this.currentPage = paginationState.currentPage;
        this.hasNextPage = !!paginationState.pageTokens[this.currentPage + 1]; // Проверка наличия следующей страницы
        this.hasPreviousPage = this.currentPage > 1; // Проверка наличия предыдущей страницы
      });
  }

  // Метод для загрузки следующей страницы
  loadNextPage() {
    if (this.hasNextPage) {
      this.store.dispatch(
        loadVideos({ query: this.route.snapshot.queryParams['search'] }),
      );
    }
  }

  // Метод для загрузки предыдущей страницы
  loadPreviousPage() {
    if (this.hasPreviousPage) {
      this.store.dispatch(
        loadVideos({ query: this.route.snapshot.queryParams['search'] }),
      );
    }
  }

  private updateSearchQueryInURL(query: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: query },
      queryParamsHandling: 'merge', // Объединяем новые параметры с текущими
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  filterCustomCards(searchString: string) {
    this.filteredCustomCards = this.filteredCustomCards.filter((card) =>
      card.title.toLowerCase().includes(searchString.toLowerCase()),
    );
  }

  private updateSearchResultsVisibility() {
    // Видимость результатов поиска
    this.searchResultsVisible =
      this.filteredCustomCards.length > 0 || this.filteredVideos.length > 0;
  }

  get sortField(): 'date' | 'count' {
    return this.sortService.getSortField;
  }

  get sortOrder(): string {
    return this.sortService.getSortOrder;
  }
  get searchQueryWords(): string {
    return this.sortService.getSearchQueryWords;
  }
}
