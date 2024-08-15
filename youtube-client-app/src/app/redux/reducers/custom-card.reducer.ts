import { createReducer, on } from '@ngrx/store';
import { addCustomCard, deleteCustomCard } from '../actions/actions';
import { CustomCard } from 'app/shared/models/search-item.model';

export const initialCustomCard: CustomCard[] = [];

export const customCardReducer = createReducer<CustomCard[]>(
  initialCustomCard,
  on(addCustomCard, (state, { card }) => [...state, card]),
  on(deleteCustomCard, (state, { cardId }) =>
    state.filter((card) => card.id !== cardId),
  ),
);

// Экспортируем редьюсер и начальное состояние
export { customCardReducer as reducer, initialCustomCard as initialState };
