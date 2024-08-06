import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideoState } from '../state/app.state';

export const selectVideoState = createFeatureSelector<VideoState>('videos');

export const selectVideoItems = createSelector(
  selectVideoState,
  (state: VideoState) => {
    console.log('Current video state:', state);
    return state ? state.items : [];
  },
);
