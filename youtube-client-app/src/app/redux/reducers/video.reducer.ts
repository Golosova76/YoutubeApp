import { createReducer, on } from '@ngrx/store';
import { initialState, VideoState } from '../state/app.state';
import {
  loadVideos,
  loadVideosFailure,
  loadVideosSuccess,
} from '../actions/actions';

// Начальное состояние для части состояния `videos`
export const initialVideoState: VideoState = {
  items: [],
  loading: false,
  error: null,
};

export const videoReducer = createReducer(
  initialVideoState, // Используем начальное состояние
  on(loadVideos, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadVideosSuccess, (state, { videos }) => ({
    ...state,
    items: videos, // Обновляем `items` в состоянии `videos`
    loading: false,
  })),
  on(loadVideosFailure, (state, { error }) => ({
    ...state,
    error, // Обновляем `error` в состоянии `videos`
    loading: false,
  })),
);
