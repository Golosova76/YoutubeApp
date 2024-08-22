import { customCardReducer, initialState } from './custom-card.reducer';
import { addCustomCard, deleteCustomCard } from '../actions/actions';
import { CustomCard } from 'app/shared/models/search-item.model';

describe('CustomCard Reducer', () => {
  it('should return the initial state when an unknown action is passed', () => {
    const result = customCardReducer(undefined, { type: 'unknown' });
    expect(result).toEqual(initialState);
  });

  it('should add a custom card', () => {
    const card: CustomCard = {
      id: '1',
      title: 'Test Card',
      description: 'Test Description',
      imageUrl: 'http://example.com/image.jpg',
      videoUrl: 'http://example.com/video.mp4',
      creationDate: new Date(),
    };
    const result = customCardReducer(initialState, addCustomCard({ card }));

    expect(result.length).toBe(1);
    expect(result[0]).toEqual(card);
  });

  it('should delete a custom card by ID', () => {
    const stateWithCards: CustomCard[] = [
      {
        id: '1',
        title: 'Test Card',
        description: 'Test Description',
        imageUrl: 'http://example.com/image.jpg',
        videoUrl: 'http://example.com/video.mp4',
        creationDate: new Date(),
      },
    ];
    const result = customCardReducer(
      stateWithCards,
      deleteCustomCard({ cardId: '1' }),
    );

    expect(result.length).toBe(0);
  });

  it('should not delete a card if the ID does not match', () => {
    const stateWithCards: CustomCard[] = [
      {
        id: '1',
        title: 'Test Card',
        description: 'Test Description',
        imageUrl: 'http://example.com/image.jpg',
        videoUrl: 'http://example.com/video.mp4',
        creationDate: new Date(),
      },
    ];
    const result = customCardReducer(
      stateWithCards,
      deleteCustomCard({ cardId: '2' }),
    );

    expect(result.length).toBe(1);
    expect(result[0]).toEqual(stateWithCards[0]);
  });

  it('should maintain previous state when adding a card', () => {
    const initialCards: CustomCard[] = [
      {
        id: '1',
        title: 'Existing Card',
        description: 'Existing Description',
        imageUrl: 'http://example.com/existing.jpg',
        videoUrl: 'http://example.com/existing.mp4',
        creationDate: new Date(),
      },
    ];
    const newCard: CustomCard = {
      id: '2',
      title: 'New Card',
      description: 'New Description',
      imageUrl: 'http://example.com/new.jpg',
      videoUrl: 'http://example.com/new.mp4',
      creationDate: new Date(),
    };
    const result = customCardReducer(
      initialCards,
      addCustomCard({ card: newCard }),
    );

    expect(result.length).toBe(2);
    expect(result).toEqual([...initialCards, newCard]);
  });
});
