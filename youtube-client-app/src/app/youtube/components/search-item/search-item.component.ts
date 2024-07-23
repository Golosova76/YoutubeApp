import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';

import { VideoItem } from 'app/shared/models/search-item.model';
import { DateBackgroundDirective } from 'app/shared/directives/line-back-directive';
import { VideoStatisticsComponent } from '../video-statistics/video-statistics.component';
import { Router } from '@angular/router';
import { VideoDataService } from 'app/youtube/services/video-data.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CustomButtonComponent,
    DateBackgroundDirective,
    VideoStatisticsComponent,
  ],
})
export class SearchItemComponent {
  @Input() videoData?: VideoItem;

  constructor(
    private router: Router,
    private videoDataService: VideoDataService,
  ) {}

  getThumbnailUrl(): string {
    if (this.videoData?.snippet?.thumbnails?.maxres) {
      return this.videoData.snippet.thumbnails.maxres.url;
    }
    if (this.videoData?.snippet?.thumbnails?.high) {
      return this.videoData.snippet.thumbnails.high.url;
    }
    if (this.videoData?.snippet?.thumbnails?.medium) {
      return this.videoData.snippet.thumbnails.medium.url;
    }
    return (
      this.videoData?.snippet?.thumbnails?.default?.url || 'assets/caption.jpg'
    );
  }

  navigateToDetail() {
    if (this.videoData) {
      this.videoDataService.currentVideoData = this.videoData;
      this.router.navigate([
        '/youtube/detailed-information',
        this.videoData.id,
      ]);
    }
  }
}
