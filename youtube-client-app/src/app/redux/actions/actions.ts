import { createAction, props } from '@ngrx/store';
import { CustomCard, VideoItem } from 'app/shared/models/search-item.model';

// Действия для работы с видео
export const loadVideos = createAction(
  '[search-results] Load Videos',
  props<{ query: string }>(),
);
export const loadVideosSuccess = createAction(
  '[Effect] Load Videos Success',
  props<{
    videoEntities: { [id: string]: VideoItem };
    videoListIds: string[];
  }>(),
);
export const loadVideosFailure = createAction(
  '[Effect] Load Videos Failure',
  props<{ error: Error }>(),
);

// Действия для работы с кастомными карточками
export const addCustomCard = createAction(
  '[Custom Card] Add',
  props<{ card: CustomCard }>(),
);
export const deleteCustomCard = createAction(
  '[Custom Card] Delete',
  props<{ cardId: string }>(),
);
