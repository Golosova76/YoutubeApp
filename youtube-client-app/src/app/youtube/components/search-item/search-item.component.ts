import { CommonModule } from '@angular/common';
import { Component, effect, Input, SimpleChanges } from '@angular/core';

import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';

import { VideoItem } from 'app/shared/models/search-item.model';
import { DateBackgroundDirective } from 'app/shared/directives/line-back-directive';
import { VideoStatisticsComponent } from '../video-statistics/video-statistics.component';
import { Router } from '@angular/router';
import { VideoDataService } from 'app/youtube/services/video-data.service';
import { getThumbnailUrl } from 'app/shared/utils/utils';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/state/app.state';
import { selectFavoriteIds } from 'app/redux/selectors/favorite.selectors';
import { map, Subject, takeUntil } from 'rxjs';
import {
  addFavorite,
  removeFavorite,
} from 'app/redux/actions/favorite.actions';
import { FavoriteService } from 'app/youtube/services/favorite.service';

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
  @Input() videoData!: VideoItem;

  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private videoDataService: VideoDataService,
    private store: Store<AppState>,
    private favoriteService: FavoriteService,
  ) {}

  getThumbnailUrl(): string {
    return getThumbnailUrl(this.videoData);
  }

  navigateToDetail() {
    if (this.videoData) {
      this.videoDataService.currentVideoData = this.videoData;
      this.router.navigate([
        'youtube',
        'detailed-information',
        this.videoData.id,
      ]);
    }
  }

  addToFavorite() {
    if (this.favoriteService.isFavorite(this.videoData.id)) {
      this.favoriteService.removeFavorite(this.videoData.id);
    } else {
      this.favoriteService.addFavorite(this.videoData);
    }
  }

  // Метод для получения пути к изображению сердечка в зависимости от состояния
  getHeartIcon(): string {
    return this.isFavorite ? 'assets/heart_select.svg' : 'assets/heart.svg';
  }

  get isFavorite(): boolean {
    // Проверяем через сигнал, избранное ли видео
    return this.favoriteService.isFavorite(this.videoData.id);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
