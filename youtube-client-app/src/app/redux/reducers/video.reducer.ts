import { createReducer, on } from '@ngrx/store';
import { VideoState } from '../state/app.state';
import {
  loadVideos,
  loadVideosFailure,
  loadVideosSuccess,
} from '../actions/actions';

export const initialVideoState: VideoState = {
  items: [],
  loading: false,
  error: null,
};

// Редьюсер для работы с видео
export const videosReducer = createReducer(
  initialVideoState,
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
