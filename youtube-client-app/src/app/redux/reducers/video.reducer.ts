import { createReducer, on } from '@ngrx/store';
import { AppState, initialState, VideoState } from '../state/app.state';
import {
  loadVideos,
  loadVideosFailure,
  loadVideosSuccess,
} from '../actions/actions';

export const initialVideoState: VideoState = {
  videoEntities: {},
  videoListIds: [],
  favoriteIds: [],
  loading: false,
  error: null,
};

// Редьюсер для работы с видео
export const videosReducer = createReducer<VideoState>(
  initialVideoState,
  on(loadVideos, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadVideosSuccess, (state, { videoEntities, videoListIds }) => ({
    ...state,
    videoEntities: { ...state.videoEntities, ...videoEntities },
    videoListIds,
    loading: false,
    error: null,
  })),
  on(loadVideosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
);
