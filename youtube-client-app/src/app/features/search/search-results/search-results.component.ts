import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

import {
  createVideosData,
  YouTubeVideoListResponse,
} from 'app/shared/models/search-response.model';
import { VideoItem } from 'app/shared/models/search-item.model';
import { SearchItemComponent } from './search-item/search-item.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [CommonModule, SearchItemComponent],
})
export class SearchResultsComponent implements OnInit, OnChanges {
  public videosData!: YouTubeVideoListResponse;

  public filteredVideos: VideoItem[] = [];

  @Input() visibleResults: boolean = false;

  @Input() searchQuery: string = '';

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['searchQuery'] &&
      changes['searchQuery'].currentValue !== undefined &&
      this.videosData
    ) {
      this.filterVideos(this.searchQuery);
    }
  }

  async loadData() {
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
    } catch (error) {
      console.error('Error loading the videos', error);
    }
  }

  filterVideos(searchString: string) {
    this.filteredVideos = this.videosData.items.filter((item) =>
      item.snippet.title.toLowerCase().includes(searchString.toLowerCase()),
    );
  }
}
