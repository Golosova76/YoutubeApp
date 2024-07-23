import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { VideoStatisticsComponent } from 'app/youtube/components/video-statistics/video-statistics.component';
import { VideoItem } from 'app/shared/models/search-item.model';
import { DateBackgroundDirective } from 'app/shared/directives/line-back-directive';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoDataService } from 'app/youtube/services/video-data.service';

interface NavigationState {
  videoData: VideoItem;
}

@Component({
  selector: 'app-detailed-information',
  standalone: true,
  imports: [CommonModule, VideoStatisticsComponent, DateBackgroundDirective],
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent {
  public videoData?: VideoItem;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private videoDataService: VideoDataService,
  ) {}

  ngOnInit(): void {
    this.videoData = this.videoDataService.currentVideoData;
    this.videoDataService.clearVideoData();
  }

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
}
