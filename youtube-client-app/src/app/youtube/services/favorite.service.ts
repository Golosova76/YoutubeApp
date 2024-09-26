import { Injectable, signal } from '@angular/core';
import { VideoItem } from '../../shared/models/search-item.model';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private favoriteIds = signal<string[]>([]); // Сигнал для хранения ID избранных видео
  private favoriteVideosSignal = signal<VideoItem[]>([]); // Сигнал для хранения избранных видео

  // Добавить в избранное
  addFavorite(video: VideoItem) {
    this.favoriteIds.update((ids) => [...ids, video.id]);
    this.favoriteVideosSignal.update((videos) => [...videos, video]);
  }

  // Удалить из избранного
  removeFavorite(videoId: string) {
    this.favoriteIds.update((ids) => ids.filter((id) => id !== videoId));
    this.favoriteVideosSignal.update((videos) =>
      videos.filter((video) => video.id !== videoId),
    );
  }

  // Получить сигнал для избранных видео
  get favoriteVideos() {
    return this.favoriteVideosSignal;
  }

  // Проверка, является ли видео избранным
  isFavorite(videoId: string) {
    return this.favoriteIds().includes(videoId);
  }
}
