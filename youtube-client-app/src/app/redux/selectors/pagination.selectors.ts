import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, PaginationState } from '../state/app.state';

// Селектор для получения состояния пагинации
export const selectPaginationState =
  createFeatureSelector<PaginationState>('pagination');

// Селектор для получения текущей страницы
export const selectCurrentPage = createSelector(
  selectPaginationState,
  (state: PaginationState) => state.currentPage,
);

// Селектор для получения токенов страниц
export const selectPageTokens = createSelector(
  selectPaginationState,
  (state: PaginationState) => state.pageTokens,
);
