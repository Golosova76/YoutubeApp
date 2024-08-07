import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/app.state';
import {
  loadVideos,
  loadVideosFailure,
  loadVideosSuccess,
} from '../actions/actions';

// Редьюсер для работы с видео
export const videosReducer = createReducer(
  initialState,
  on(loadVideos, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadVideosSuccess, (state, { videos }) => ({
    ...state,
    items: videos,
    loading: false,
    error: null,
  })),
  on(loadVideosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
);
