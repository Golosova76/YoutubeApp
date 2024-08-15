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
  (state: VideoState) => state.favoriteIds,
);

// Селектор для получения всех видео (уже из общего состояния videos)
export const selectVideoEntities = createSelector(
  selectVideoState,
  (state: VideoState) => state.videoEntities,
);

// Селектор для получения полного списка избранных видео
export const selectFavoriteVideos = createSelector(
  selectFavoriteIds,
  selectVideoEntities,
  (favoriteIds, videoEntities) => {
    return favoriteIds.map((id) => videoEntities[id]);
  },
);
