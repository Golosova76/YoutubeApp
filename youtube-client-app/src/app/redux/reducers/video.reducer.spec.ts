import { VideoItem } from 'app/shared/models/search-item.model';
import {
  loadVideos,
  loadVideosSuccess,
  loadVideosFailure,
} from '../actions/actions';
import { initialVideoState, videosReducer } from './video.reducer';

describe('Videos Reducer', () => {
  it('should return the initial state when an unknown action is passed', () => {
    const result = videosReducer(undefined, { type: 'unknown' });
    expect(result).toEqual(initialVideoState);
  });

  it('should set loading to true on loadVideos action', () => {
    const result = videosReducer(
      initialVideoState,
      loadVideos({ query: 'test query' }),
    );

    expect(result.loading).toBe(true);
    expect(result.error).toBeNull();
  });

  it('should update state on loadVideosSuccess action', () => {
    const videoEntities = {
      '1': {
        id: '1',
        kind: 'youtube#video',
        etag: 'etag123',
        snippet: {
          title: 'Test Video',
          description: 'Test Description',
          thumbnails: {
            default: {
              url: 'http://example.com/default.jpg',
              width: 120,
              height: 90,
            },
          },
        },
        statistics: {
          viewCount: '100',
          likeCount: '10',
        },
      } as VideoItem,
    };
    const videoListIds = ['1'];
    const result = videosReducer(
      initialVideoState,
      loadVideosSuccess({ videoEntities, videoListIds }),
    );

    expect(result.loading).toBe(false);
    expect(result.videoEntities).toEqual(videoEntities);
    expect(result.videoListIds).toEqual(videoListIds);
    expect(result.error).toBeNull();
  });

  it('should set loading to false and update error on loadVideosFailure action', () => {
    const error = new Error('Failed to load videos');
    const result = videosReducer(
      initialVideoState,
      loadVideosFailure({ error }),
    );

    expect(result.loading).toBe(false);
    expect(result.error).toBe(error);
  });

  it('should maintain previous state if no relevant action is passed', () => {
    const initialState = {
      ...initialVideoState,
      videoEntities: {
        '1': {
          id: '1',
          kind: 'youtube#video',
          etag: 'etag123',
          snippet: {
            title: 'Existing Video',
            description: 'Existing Description',
            thumbnails: {
              default: {
                url: 'http://example.com/existing.jpg',
                width: 120,
                height: 90,
              },
            },
          },
          statistics: {
            viewCount: '500',
            likeCount: '50',
          },
        } as VideoItem,
      },
      videoListIds: ['1'],
    };
    const result = videosReducer(initialState, { type: 'unknown' });

    expect(result).toEqual(initialState);
  });
});
