import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
  isFavorite: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private videoDataService: VideoDataService,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    // Подписываемся на список избранных видео, чтобы определить, является ли текущее видео избранным
    this.store
      .select(selectFavoriteIds)
      .pipe(
        map((favoriteIds: string[]) => favoriteIds.includes(this.videoData.id)),
        takeUntil(this.destroy$), // Добавляем оператор takeUntil для управления отпиской
      )
      .subscribe((isFavorite) => {
        this.isFavorite = isFavorite;
      });
  }

  toggleFavorite() {
    if (this.isFavorite) {
      this.store.dispatch(removeFavorite({ videoId: this.videoData.id }));
    } else {
      this.store.dispatch(addFavorite({ videoId: this.videoData.id }));
    }
  }

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
    this.toggleFavorite();
  }

  // Метод для получения пути к изображению сердечка в зависимости от состояния
  getHeartIcon(): string {
    return this.isFavorite ? 'assets/heart_select.svg' : 'assets/heart.svg';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
