import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { YouTubeVideoListResponse } from 'app/shared/models/search-response.model';
import { VideoItem } from 'app/shared/models/search-item.model';
import { SearchItemComponent } from '../../components/search-item/search-item.component';
import { SortVideosPipe } from 'app/shared/pipe/sort-date-count.pipe';
import { FilterVideosPipe } from 'app/shared/pipe/filter-words.pipe';
import { SearchService } from 'app/youtube/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SortService } from 'app/youtube/services/sortsearch.service';
import { YoutubeApiService } from 'app/youtube/services/youtube-api.service';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  takeUntil,
  filter,
  merge,
  map,
  switchMap,
  Observable,
  tap,
} from 'rxjs';
import { FormControl } from '@angular/forms';
import { DEBOUNCE_TIME_MS } from 'app/shared/utils/utils';
import { loadVideos } from 'app/redux/actions/actions';
import { Store } from '@ngrx/store';
import { VideoState } from 'app/redux/state/app.state';
import {
  selectFilteredVideos,
  selectSearchResultsVisible,
} from 'app/redux/selectors/video.selectors';

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
  ],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public videosData!: YouTubeVideoListResponse;
  public filteredVideos: VideoItem[] = [];
  public searchResultsVisible: boolean = false;
  private destroy$ = new Subject<void>();
  searchControl = new FormControl('');

  filteredVideos$!: Observable<VideoItem[]>;
  //searchResultsVisible$!: Observable<boolean>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
    private sortService: SortService,
    private youtubeService: YoutubeApiService,
    private store: Store<{ videos: VideoState }>,
  ) {}

  ngOnInit() {
    this.filteredVideos$ = this.store.select(selectFilteredVideos);
    // this.searchResultsVisible$ = this.store.select(selectSearchResultsVisible);

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
          console.log('Dispatching loadVideos with query:', safeValue);
          this.store.dispatch(loadVideos({ query: safeValue }));
        }),
      )
      .subscribe();

    this.filteredVideos$
      .pipe(
        takeUntil(this.destroy$),
        tap((videos) => console.log('Filtered videos:', videos)),
      )
      .subscribe((videos: VideoItem[]) => {
        this.filteredVideos = videos;
        this.searchResultsVisible = videos.length > 0;
        console.log('Updated filteredVideos:', this.filteredVideos);
        console.log('Search results visible:', this.searchResultsVisible);
      });
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

  filterVideos(searchString: string) {
    this.filteredVideos = this.filteredVideos.filter((item) =>
      item.snippet.title.toLowerCase().includes(searchString.toLowerCase()),
    );
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
