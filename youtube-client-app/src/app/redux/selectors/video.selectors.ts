import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideoState } from '../state/app.state';

export const selectVideoState = createFeatureSelector<VideoState>('videos');

export const selectFilteredVideos = createSelector(
  selectVideoState,
  (state: VideoState) => {
    console.log('Current video state:', state);
    return state ? state.items : [];
  },
);

export const selectSearchResultsVisible = createSelector(
  selectVideoState,
  (state: VideoState) => state.items.length > 0,
);
