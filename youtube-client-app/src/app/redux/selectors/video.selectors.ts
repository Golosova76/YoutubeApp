import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideoState } from '../state/app.state';

export const selectVideoState = createFeatureSelector<VideoState>('videos');

// Получаем элементы видео из состояния видео
export const selectVideoItems = createSelector(
  selectVideoState,
  (state: VideoState) => state.items,
);
