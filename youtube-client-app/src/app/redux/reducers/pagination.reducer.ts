import { createReducer, on } from '@ngrx/store';

import { initialPaginationState } from '../state/app.state';
import { setCurrentPage, setPageToken } from '../actions/pagination.actions';

export const paginationReducer = createReducer(
  initialPaginationState,
  on(setCurrentPage, (state, { pageNumber }) => ({
    ...state,
    currentPage: pageNumber,
  })),
  on(setPageToken, (state, { pageNumber, pageToken }) => ({
    ...state,
    pageTokens: {
      ...state.pageTokens,
      [pageNumber]: pageToken,
    },
  })),
);
