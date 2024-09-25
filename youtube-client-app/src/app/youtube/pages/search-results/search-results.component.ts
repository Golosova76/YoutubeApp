import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  Signal,
  effect,
  WritableSignal,
} from '@angular/core';
import { inject, Injectable } from '@angular/core';

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
  take,
} from 'rxjs';
import { FormControl } from '@angular/forms';
import { DEBOUNCE_TIME_MS } from 'app/shared/utils/utils';
import { loadVideos } from 'app/redux/actions/actions';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/state/app.state';
import { selectFilteredVideos } from 'app/redux/selectors/video.selectors';
import { CustomCardComponent } from 'app/youtube/components/custom-card/custom-card.component';
import { selectCustomCards } from 'app/redux/selectors/custom-card.selectors';
import { YoutubeApiService } from 'app/youtube/services/youtube-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilterVideosSearchStringPipe } from 'app/shared/pipe/filter-videos.pipe';

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
    FilterVideosSearchStringPipe,
  ],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public videosData!: YouTubeVideoListResponse;
  public filteredVideos: VideoItem[] = [];
  public filteredCustomCards: CustomCard[] = [];
  public searchResultsVisible: boolean = false;
  private destroy$ = new Subject<void>();
  searchControl = new FormControl('');
  public searchString: string = '';

  // Добавляем videosSignal как сигнал для хранения списка видео
  public videosSignal: WritableSignal<VideoItem[]> = signal<VideoItem[]>([]);

  filteredVideos$!: Observable<VideoItem[]>;
  customCards$!: Observable<CustomCard[]>;
  customCards: CustomCard[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
    public youtubeService: YoutubeApiService,
    private sortService: SortService,
    private store: Store<AppState>,
  ) {
    effect(() => {
      const videos = this.videosSignal(); // Получаем текущее значение сигнала
      this.filteredVideos = videos; // Обновляем filteredVideos на основе сигнала
      this.updateSearchResultsVisibility(); // Обновляем видимость результатов поиска
    });
  }

  ngOnInit() {
    // Проверка состояния хранилища при инициализации компонента
    this.store.subscribe((state) => {});

    this.customCards$ = this.store.select(selectCustomCards);

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
          this.updateSearchQueryInURL(safeValue);
          // Запрашиваем данные и обновляем сигнал
          this.youtubeService
            .searchAndFetchDetails(safeValue)
            .pipe(
              take(1), // Нам нужно только одно значение
            )
            .subscribe((videos) => {
              this.videosSignal.set(videos); // Обновляем сигнал через set()
            });
        }),
      )
      .subscribe();

    // Подписываемся на изменения customCards, если они существуют
    this.customCards$
      .pipe(takeUntil(this.destroy$))
      .subscribe((customCards: CustomCard[]) => {
        this.filteredCustomCards = customCards || []; // Если customCards не определены, используем пустой массив
        this.updateSearchResultsVisibility();
      });
  }

  updateSearchQueryInURL(query: string) {
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
    this.searchResultsVisible =
      this.filteredCustomCards.length > 0 || this.videosSignal().length > 0;
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
