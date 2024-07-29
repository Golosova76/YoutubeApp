import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  createVideosData,
  YouTubeVideoListResponse,
} from 'app/shared/models/search-response.model';
import { VideoItem } from 'app/shared/models/search-item.model';
import { SearchItemComponent } from '../../components/search-item/search-item.component';
import { SortVideosPipe } from 'app/shared/pipe/sort-date-count.pipe';
import { FilterVideosPipe } from 'app/shared/pipe/filter-words.pipe';
import { SearchService } from 'app/youtube/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { SortService } from 'app/youtube/services/sortsearch.service';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

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
export class SearchResultsComponent implements OnInit {
  public videosData!: YouTubeVideoListResponse;

  public filteredVideos: VideoItem[] = [];

  public searchResultsVisible: boolean = false;

  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private sortService: SortService,
  ) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(
        debounceTime(100),
        distinctUntilChanged((prev, curr) => prev['search'] === curr['search']),
        takeUntil(this.destroy$),
      )
      .subscribe((params) => {
        const searchQuery = params['search'];
        this.searchService.setSearchQuery(searchQuery || '');
        this.loadData(searchQuery);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async loadData(searchQuery?: string) {
    // eslint-disable-next-line operator-linebreak
    const url =
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/angular/response.json';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      this.videosData = createVideosData(responseData);
      console.log('Data loaded:', this.videosData);
      this.searchResultsVisible =
        this.searchService.getSearchResultsVisibility();
      if (this.searchResultsVisible) {
        this.updateFilteredVideos();
      }
    } catch (error) {
      console.error('Error loading the videos', error);
    }
  }

  updateFilteredVideos() {
    if (this.videosData && this.videosData.items) {
      this.filterVideos(this.searchService.getSearchQuery());
    } else {
      console.log('Data not loaded or `items` is undefined');
    }
  }

  filterVideos(searchString: string) {
    this.filteredVideos = this.videosData.items.filter((item) =>
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
