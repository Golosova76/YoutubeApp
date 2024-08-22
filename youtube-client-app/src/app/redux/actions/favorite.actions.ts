import { createAction, props } from '@ngrx/store';

export const addFavorite = createAction(
  '[Video] Add Favorite',
  props<{ videoId: string }>(),
);

export const removeFavorite = createAction(
  '[Video] Remove Favorite',
  props<{ videoId: string }>(),
);
