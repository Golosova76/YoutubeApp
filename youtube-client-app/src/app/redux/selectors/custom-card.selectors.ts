import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { CustomCard } from 'app/shared/models/search-item.model';

export const selectCustomCards = createSelector(
  (state: AppState) => state.customCards,
  (customCards: CustomCard[]) => customCards,
);
