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

  private isDataLoaded = false;

  @Input() visibleResults: boolean = false;

  @Input() searchQuery: string = '';

  @Input() sortField: string = '';

  @Input() sortOrder: string = 'asc';

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      `ngOnChanges - searchQuery: ${this.searchQuery}, sortField: ${this.sortField}, sortOrder: ${this.sortOrder}`,
    );

    // Проверяем, что данные загружены перед сортировкой
    if (this.isDataLoaded) {
      const shouldFilterAndSort =
        (changes['searchQuery'] &&
          changes['searchQuery'].currentValue !== undefined) ||
        (changes['sortField'] &&
          changes['sortField'].currentValue !== undefined) ||
        (changes['sortOrder'] &&
          changes['sortOrder'].currentValue !== undefined);

      if (shouldFilterAndSort) {
        this.filterAndSortVideos();
      }
    }
  }

  ngOnInit() {
    this.loadData();
  }
  /*
  ngOnChanges(changes: SimpleChanges) {
    console.log(
      `ngOnChanges - searchQuery: ${this.searchQuery}, sortField: ${this.sortField}, sortOrder: ${this.sortOrder}`,
    );
    if (
      changes['searchQuery'] &&
      changes['searchQuery'].currentValue !== undefined &&
      this.videosData
    ) {
      console.log(`searchQuery changed: ${this.searchQuery}`);
      this.filterAndSortVideos();
    }
    if (changes['sortField'] || changes['sortOrder']) {
      console.log(`sortField: ${this.sortField}, sortOrder: ${this.sortOrder}`);
      this.sortVideos();
    }
  }
    */

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
      this.isDataLoaded = true;
      this.filterAndSortVideos();
      console.log('Data loaded:', this.videosData);
    } catch (error) {
      console.error('Error loading the videos', error);
    }
  }

  filterAndSortVideos() {
    this.filterVideos(this.searchQuery);
    console.log(
      `Before sorting - sortField: ${this.sortField}, sortOrder: ${this.sortOrder}`,
    );
    this.sortVideos();
  }

  filterVideos(searchString: string) {
    console.log(`Filtering videos with searchString: ${searchString}`);
    this.filteredVideos = this.videosData.items.filter((item) =>
      item.snippet.title.toLowerCase().includes(searchString.toLowerCase()),
    );
  }

  sortVideos() {
    console.log(
      `Sorting videos with sortField: ${this.sortField} and sortOrder: ${this.sortOrder}`,
    );
    if (!this.filteredVideos || this.filteredVideos.length === 0) return;

    if (!this.sortField) {
      console.error('sortField is not set');
      return;
    }

    this.filteredVideos.sort((a, b) => {
      let valueA: number, valueB: number;

      if (this.sortField === 'date') {
        // Проверяем существование поля и задаем значение 0, если его нет
        valueA = a.snippet?.publishedAt
          ? new Date(a.snippet.publishedAt).getTime()
          : 0;
        valueB = b.snippet?.publishedAt
          ? new Date(b.snippet.publishedAt).getTime()
          : 0;
      } else if (this.sortField === 'count') {
        valueA = a.statistics?.viewCount
          ? parseInt(a.statistics.viewCount, 10)
          : 0;
        valueB = b.statistics?.viewCount
          ? parseInt(b.statistics.viewCount, 10)
          : 0;
      } else {
        // Если не поддерживается sortField, выходим
        console.error(`Unsupported sortField: ${this.sortField}`);
        return 0;
      }

      if (isNaN(valueA) || isNaN(valueB)) {
        console.error(
          `One of the values is not a number: valueA=${valueA}, valueB=${valueB}`,
        );
      }

      // Сравнение значений
      return valueA < valueB
        ? this.sortOrder === 'asc'
          ? -1
          : 1
        : valueA > valueB
          ? this.sortOrder === 'asc'
            ? 1
            : -1
          : 0;
    });
  }
}
