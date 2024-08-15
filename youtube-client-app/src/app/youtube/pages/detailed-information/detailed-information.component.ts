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
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/state/app.state';
import { map, Subject, takeUntil } from 'rxjs';
import { selectFavoriteIds } from 'app/redux/selectors/favorite.selectors';
import {
  addFavorite,
  removeFavorite,
} from 'app/redux/actions/favorite.actions';

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

  isFavorite: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(
    private videoDataService: VideoDataService,
    private router: Router,
    private searchService: SearchService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    // Загружаем данные, не удаляем их
    this.videoData = this.videoDataService.currentVideoData;
    // Подписываемся на список избранных видео, чтобы определить, является ли текущее видео избранным
    if (this.videoData) {
      this.store
        .select(selectFavoriteIds)
        .pipe(
          map((favoriteIds: string[]) =>
            favoriteIds.includes(this.videoData!.id),
          ),
          takeUntil(this.destroy$),
        )
        .subscribe((isFavorite) => {
          this.isFavorite = isFavorite;
        });
    }
  }

  ngOnDestroy(): void {
    // Очищаем данные при уничтожении компонента
    this.videoDataService.clearVideoData();
    this.destroy$.next();
    this.destroy$.complete();
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

  addToFavorite() {
    if (this.isFavorite) {
      this.store.dispatch(removeFavorite({ videoId: this.videoData!.id }));
    } else {
      this.store.dispatch(addFavorite({ videoId: this.videoData!.id }));
    }
  }

  // Метод для получения пути к изображению сердечка в зависимости от состояния
  getHeartIcon(): string {
    return this.isFavorite ? 'assets/heart_select.svg' : 'assets/heart.svg';
  }
}
