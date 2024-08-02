import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

import { VideoStatisticsComponent } from 'app/youtube/components/video-statistics/video-statistics.component';
import { VideoItem } from 'app/shared/models/search-item.model';
import { DateBackgroundDirective } from 'app/shared/directives/line-back-directive';
import { VideoDataService } from 'app/youtube/services/video-data.service';
import { getThumbnailUrl } from 'app/shared/utils/utils';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import { Router } from '@angular/router';
import { SearchService } from 'app/youtube/services/search.service';

@Component({
  selector: 'app-detailed-information',
  standalone: true,
  imports: [
    CommonModule,
    VideoStatisticsComponent,
    DateBackgroundDirective,
    CustomButtonComponent,
    FontAwesomeModule,
  ],
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent {
  public videoData?: VideoItem;

  faBackward = faBackward;

  constructor(
    private videoDataService: VideoDataService,
    private router: Router,
    private searchService: SearchService,
  ) {}

  ngOnInit(): void {
    // Загружаем данные, не удаляем их
    this.videoData = this.videoDataService.currentVideoData;
  }

  ngOnDestroy(): void {
    // Очищаем данные при уничтожении компонента
    this.videoDataService.clearVideoData();
  }

  getThumbnailUrl(): string {
    return getThumbnailUrl(this.videoData);
  }

  navigateToDetail() {
    // Получаем текущий поисковый запрос из сервиса
    const currentSearchQuery = this.searchService.searchQuery$;

    // Передаем этот запрос как параметр URL при навигации
    this.router.navigate(['youtube', 'search-results'], {
      queryParams: { search: currentSearchQuery },
    });
  }
}
