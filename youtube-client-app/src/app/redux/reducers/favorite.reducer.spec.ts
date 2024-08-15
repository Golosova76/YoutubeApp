import { addFavorite, removeFavorite } from '../actions/favorite.actions';
import { videoFavoriteReducer } from './favorite.reducer';
import { initialVideoState } from './video.reducer';

describe('VideoFavorite Reducer', () => {
  it('should return the initial state when an unknown action is passed', () => {
    const result = videoFavoriteReducer(undefined, { type: 'unknown' });
    expect(result).toEqual(initialVideoState);
  });

  it('should add a video ID to favorites', () => {
    const videoId = '1';
    const result = videoFavoriteReducer(
      initialVideoState,
      addFavorite({ videoId }),
    );

    expect(result.favoriteIds).toContain(videoId);
    expect(result.favoriteIds.length).toBe(1);
  });

  it('should remove a video ID from favorites', () => {
    const initialState = {
      ...initialVideoState,
      favoriteIds: ['1', '2'],
    };
    const result = videoFavoriteReducer(
      initialState,
      removeFavorite({ videoId: '1' }),
    );

    expect(result.favoriteIds).not.toContain('1');
    expect(result.favoriteIds.length).toBe(1);
  });

  it('should not remove a video ID if it is not in favorites', () => {
    const initialState = {
      ...initialVideoState,
      favoriteIds: ['1', '2'],
    };
    const result = videoFavoriteReducer(
      initialState,
      removeFavorite({ videoId: '3' }),
    );

    expect(result.favoriteIds.length).toBe(2);
  });

  it('should maintain state when adding the same video ID multiple times', () => {
    const videoId = '1';
    const firstResult = videoFavoriteReducer(
      initialVideoState,
      addFavorite({ videoId }),
    );
    const secondResult = videoFavoriteReducer(
      firstResult,
      addFavorite({ videoId }),
    );

    expect(secondResult.favoriteIds.length).toBe(2); // Обновляем по вашему правилу
    expect(secondResult.favoriteIds).toContain(videoId);
  });
});
