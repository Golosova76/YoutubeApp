import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  createVideosData,
  YouTubeVideoListResponse,
} from 'app/shared/models/search-response.model';
import { SearchItemComponent } from './search-item/search-item.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [CommonModule, SearchItemComponent],
})
export class SearchResultsComponent {
  public videosData!: YouTubeVideoListResponse;

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
    } catch (error) {
      console.error('Error loading the videos', error);
    }
  }
}
