import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideoState } from '../state/app.state';

export const selectVideoState = createFeatureSelector<VideoState>('videos');

export const selectFilteredVideos = createSelector(
  selectVideoState,
  (state: VideoState) => {
    return state ? state.items : [];
  },
);
