import { createReducer, on } from '@ngrx/store';
import { VideoState } from '../state/app.state';
import { addFavorite, removeFavorite } from '../actions/favorite.actions';

export const initialVideoState: VideoState = {
  videoEntities: {},
  videoListIds: [],
  favoriteIds: [],
  loading: false,
  error: null,
};

export const videoFavoriteReducer = createReducer(
  initialVideoState,
  on(addFavorite, (state, { videoId }) => ({
    ...state,
    favoriteIds: [...state.favoriteIds, videoId],
  })),
  on(removeFavorite, (state, { videoId }) => ({
    ...state,
    favoriteIds: state.favoriteIds.filter((id) => id !== videoId),
  })),
);
