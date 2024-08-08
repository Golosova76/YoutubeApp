import { createReducer, on } from '@ngrx/store';
import { addCustomCard, deleteCustomCard } from '../actions/actions';
import { CustomCard } from 'app/shared/models/search-item.model';

export const initialCustomCardState: CustomCard[] = [];

export const customCardReducer = createReducer(
  initialCustomCardState,
  on(addCustomCard, (state, { card }) => [...state, card]),
  on(deleteCustomCard, (state, { cardId }) =>
    state.filter((card) => card.id !== cardId),
  ),
);
