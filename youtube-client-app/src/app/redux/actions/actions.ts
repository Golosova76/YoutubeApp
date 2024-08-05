import { createAction, props } from '@ngrx/store';
import { CustomCard, VideoItem } from 'app/shared/models/search-item.model';

// Действия для работы с видео
export const loadVideos = createAction(
  '[Video API] Load Videos',
  props<{ query: string }>(),
);
export const loadVideosSuccess = createAction(
  '[Video API] Load Videos Success',
  props<{ videos: VideoItem[] }>(),
);
export const loadVideosFailure = createAction(
  '[Video API] Load Videos Failure',
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

// Фильтровать и объединять видео и кастомные карточки по поисковому запросу
export const filterAndCombineCards = createAction(
  '[Video/Card List] Filter and Combine Cards',
  props<{ query: string }>(),
);
