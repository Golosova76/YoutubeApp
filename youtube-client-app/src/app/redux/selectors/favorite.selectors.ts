import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideoState } from '../state/app.state';

// Селектор для получения состояния videos
export const selectVideoState = createFeatureSelector<VideoState>('videos');

// Селектор для получения состояния избранных видео
export const selectFavoriteVideoState =
  createFeatureSelector<VideoState>('favoriteVideos');

// Селектор для получения списка избранных видео по их идентификаторам
export const selectFavoriteIds = createSelector(
  selectFavoriteVideoState,
  (state: VideoState) => {
    console.log('Updated favoriteIds:', state.favoriteIds); // Лог для проверки
    return state.favoriteIds;
  },
);

// Селектор для получения всех видео (уже из общего состояния videos)
export const selectVideoEntities = createSelector(
  selectVideoState,
  (state: VideoState) => {
    console.log('Video Entities:', state.videoEntities);
    return state.videoEntities;
  },
);

// Селектор для получения полного списка избранных видео
export const selectFavoriteVideos = createSelector(
  selectFavoriteIds,
  selectVideoEntities,
  (favoriteIds, videoEntities) => {
    const favoriteVideos = favoriteIds
      .map((id) => videoEntities[id])
      .filter((video) => video !== undefined);

    console.log('Favorite videos:', favoriteVideos);

    return favoriteVideos;
  },
);
