import { createAction, props } from '@ngrx/store';

export const loadPage = createAction(
  '[Pagination] Load Page',
  props<{ pageNumber: number }>(),
);

export const setPageToken = createAction(
  '[Pagination] Set Page Token',
  props<{ pageNumber: number; pageToken: string }>(),
);

export const setCurrentPage = createAction(
  '[Pagination] Set Current Page',
  props<{ pageNumber: number }>(),
);
