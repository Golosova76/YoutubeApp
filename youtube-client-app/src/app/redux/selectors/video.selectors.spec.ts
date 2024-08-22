import { selectFilteredVideos } from './video.selectors';
import { VideoState } from '../state/app.state';
import { VideoItem } from 'app/shared/models/search-item.model';

describe('selectFilteredVideos', () => {
  // Мок данных
  const mockVideoEntities: { [id: string]: VideoItem } = {
    '1': {
      kind: 'youtube#video',
      etag: 'etag1',
      id: '1',
      snippet: {
        publishedAt: '2024-01-01T00:00:00Z',
        channelId: 'channel1',
        title: 'First Video',
        description: '',
        thumbnails: {
          default: { url: 'default1.jpg', width: 120, height: 90 },
          medium: { url: 'medium1.jpg', width: 320, height: 180 },
          high: { url: 'high1.jpg', width: 480, height: 360 },
        },
        channelTitle: 'Channel 1',
        tags: ['tag1', 'tag2'],
        categoryId: '1',
        liveBroadcastContent: 'none',
        localized: { title: 'First Video', description: '' },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '1000',
        likeCount: '100',
        dislikeCount: '10',
        favoriteCount: '0',
        commentCount: '20',
      },
    },
    '2': {
      kind: 'youtube#video',
      etag: 'etag2',
      id: '2',
      snippet: {
        publishedAt: '2024-01-01T00:00:00Z',
        channelId: 'channel2',
        title: 'Second Video',
        description: '',
        thumbnails: {
          default: { url: 'default2.jpg', width: 120, height: 90 },
          medium: { url: 'medium2.jpg', width: 320, height: 180 },
          high: { url: 'high2.jpg', width: 480, height: 360 },
        },
        channelTitle: 'Channel 2',
        tags: ['tag3', 'tag4'],
        categoryId: '2',
        liveBroadcastContent: 'none',
        localized: { title: 'Second Video', description: '' },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '2000',
        likeCount: '200',
        dislikeCount: '20',
        favoriteCount: '0',
        commentCount: '30',
      },
    },
    '3': {
      kind: 'youtube#video',
      etag: 'etag3',
      id: '3',
      snippet: {
        publishedAt: '2024-01-01T00:00:00Z',
        channelId: 'channel3',
        title: 'Another Video',
        description: '',
        thumbnails: {
          default: { url: 'default3.jpg', width: 120, height: 90 },
          medium: { url: 'medium3.jpg', width: 320, height: 180 },
          high: { url: 'high3.jpg', width: 480, height: 360 },
        },
        channelTitle: 'Channel 3',
        tags: ['tag5', 'tag6'],
        categoryId: '3',
        liveBroadcastContent: 'none',
        localized: { title: 'Another Video', description: '' },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '3000',
        likeCount: '300',
        dislikeCount: '30',
        favoriteCount: '0',
        commentCount: '40',
      },
    },
  };

  const mockVideoListIds = ['1', '2', '3'];

  const mockState: VideoState = {
    videoEntities: mockVideoEntities,
    videoListIds: mockVideoListIds,
    favoriteIds: [],
    loading: false,
    error: null,
  };

  it('should return all videos when search string is empty', () => {
    const result = selectFilteredVideos('')({
      videos: mockState,
    });

    expect(result).toEqual([
      mockVideoEntities['1'],
      mockVideoEntities['2'],
      mockVideoEntities['3'],
    ]);
  });

  it('should filter videos by search string', () => {
    const result = selectFilteredVideos('first')({
      videos: mockState,
    });

    expect(result).toEqual([mockVideoEntities['1']]);
  });

  it('should be case insensitive when filtering', () => {
    const result = selectFilteredVideos('FIRST')({
      videos: mockState,
    });

    expect(result).toEqual([mockVideoEntities['1']]);
  });

  it('should return an empty array if no videos match the search string', () => {
    const result = selectFilteredVideos('nonexistent')({
      videos: mockState,
    });

    expect(result).toEqual([]);
  });

  it('should correctly filter videos when search string partially matches', () => {
    const result = selectFilteredVideos('Video')({
      videos: mockState,
    });

    expect(result).toEqual([
      mockVideoEntities['1'],
      mockVideoEntities['2'],
      mockVideoEntities['3'],
    ]);
  });
});
