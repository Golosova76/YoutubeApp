import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { VideoStatisticsComponent } from 'app/youtube/components/video-statistics/video-statistics.component';
import { VideoItem } from 'app/shared/models/search-item.model';
import { DateBackgroundDirective } from 'app/shared/directives/line-back-directive';
import { VideoDataService } from 'app/youtube/services/video-data.service';
import { getThumbnailUrl } from 'app/shared/utils';

@Component({
  selector: 'app-detailed-information',
  standalone: true,
  imports: [CommonModule, VideoStatisticsComponent, DateBackgroundDirective],
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent {
  public videoData?: VideoItem;

  constructor(private videoDataService: VideoDataService) {}

  ngOnInit(): void {
    this.videoData = this.videoDataService.currentVideoData;
    this.videoDataService.clearVideoData();
  }

  getThumbnailUrl(): string {
    return getThumbnailUrl(this.videoData);
  }
}
