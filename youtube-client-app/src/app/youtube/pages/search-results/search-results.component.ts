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
} from 'rxjs';
import { FormControl } from '@angular/forms';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
    private sortService: SortService,
    private youtubeService: YoutubeApiService,
  ) {}

  ngOnInit() {
    this.searchService
      .getSearchQuery()
      .pipe(
        debounceTime(100),
        filter((value) => value !== null && value.length > 2), // Убеждаемся, что value не null и длина больше 2
        distinctUntilChanged(),
        takeUntil(this.destroy$),
      )
      .subscribe((query) => {
        const safeValue = query ?? ''; // Устанавливаем пустую строку, если value равно null
        this.updateSearchQueryInURL(safeValue); // Передаем безопасное значение
        this.youtubeService.searchAndFetchDetails(safeValue); // Передаем безопасное значение
      });

    this.route.queryParams
      .pipe(
        debounceTime(100),
        distinctUntilChanged((prev, curr) => prev['search'] === curr['search']),
        takeUntil(this.destroy$),
      )
      .subscribe((params) => {
        const searchQuery = params['search'] ?? ''; // Использование пустой строки в качестве значения по умолчанию
        this.searchControl.setValue(searchQuery, { emitEvent: false });
        this.searchService.setSearchQuery(searchQuery);
        this.youtubeService.searchAndFetchDetails(searchQuery);
      });
    // Подписка на videos$
    this.youtubeService.videos$
      .pipe(takeUntil(this.destroy$))
      .subscribe((videos: VideoItem[]) => {
        this.filteredVideos = videos;
        this.searchResultsVisible = videos.length > 0;
        console.log(
          'Videos received in SearchResultsComponent:',
          this.filteredVideos,
        );
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

  updateFilteredVideos() {
    if (this.filteredVideos) {
      console.log(
        'Using search query words:',
        this.searchService.getSearchQuery,
      );
      this.searchService.getSearchQuery().subscribe((query) => {
        this.filterVideos(query);
      });
    } else {
      console.log('Data not loaded or `filteredVideos` is undefined');
    }
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
