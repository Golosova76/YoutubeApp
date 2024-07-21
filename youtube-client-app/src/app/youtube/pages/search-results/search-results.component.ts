import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import {
  createVideosData,
  YouTubeVideoListResponse,
} from 'app/shared/models/search-response.model';
import { VideoItem } from 'app/shared/models/search-item.model';
import { SearchItemComponent } from '../../components/search-item/search-item.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { SortVideosPipe } from 'app/shared/pipe/sort-date-count.pipe';
import { FilterVideosPipe } from 'app/shared/pipe/filter-words.pipe';
import { SearchService } from 'app/youtube/services/search';
import { ActivatedRoute } from '@angular/router';
import { SortService } from 'app/youtube/services/sortsearch';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SearchItemComponent,
    SearchBarComponent,
    SortVideosPipe,
    FilterVideosPipe,
  ],
})
export class SearchResultsComponent implements OnInit {
  public videosData!: YouTubeVideoListResponse;

  public filteredVideos: VideoItem[] = [];

  public searchResultsVisible: boolean = false;

  public sortPanelVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private sortService: SortService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.updateSortPanelVisibility();
      const searchQuery = params['query'];
      if (searchQuery) {
        this.searchService.setSearchQuery(searchQuery);
        this.loadData(searchQuery); // Загружаем данные с новым запросом
      } else {
        this.loadData(); // Загружаем начальные данные
      }
    });
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
      this.updateSortPanelVisibility();
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

  get sortField(): string {
    return this.sortService.getsortField();
  }

  get sortOrder(): string {
    return this.sortService.getsortOrder();
  }

  get searchQueryWords(): string {
    return this.sortService.getSearchQuery();
  }

  updateSortPanelVisibility() {
    this.sortPanelVisible = this.sortService.getsortPanelVisible();
    console.log('Updated sortPanelVisible:', this.sortPanelVisible);
  }
}
