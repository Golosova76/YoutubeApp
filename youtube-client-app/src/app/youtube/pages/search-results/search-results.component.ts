import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

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
import { YoutubeApiService } from 'app/youtube/services/youtube-api.service';
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
export class SearchResultsComponent implements OnInit, OnDestroy {
  public videosData!: YouTubeVideoListResponse;
  public filteredVideos: VideoItem[] = [];
  public searchResultsVisible: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private sortService: SortService,
    private youtubeService: YoutubeApiService,
  ) {}

  ngOnInit() {
    this.youtubeService.videos$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (videos) => {
        this.filteredVideos = videos;
        this.searchResultsVisible = this.filteredVideos.length > 0;
        this.updateFilteredVideos();
      },
      error: (error) => console.error('Failed to load videos:', error),
    });

    this.route.queryParams
      .pipe(
        debounceTime(100),
        distinctUntilChanged((prev, curr) => prev['search'] === curr['search']),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (params) => {
          const searchQuery = params['search'];
          this.searchService.setSearchQuery(searchQuery || 'default query');
          this.youtubeService.searchAndFetchDetails(searchQuery);
        },
        error: (error) => console.error('Error handling queryParams:', error),
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateFilteredVideos() {
    if (this.filteredVideos) {
      this.filterVideos(this.searchService.getSearchQuery());
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
