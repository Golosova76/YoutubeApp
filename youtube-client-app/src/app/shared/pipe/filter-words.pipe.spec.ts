import { VideoItem } from 'app/shared/models/search-item.model';
import { FilterVideosPipe } from './filter-words.pipe';

describe('FilterVideosPipe', () => {
  // Пример данных для тестов
  const mockVideos: VideoItem[] = [
    {
      kind: 'youtube#video',
      etag: 'etag1',
      id: '1',
      snippet: {
        publishedAt: '2024-01-01T00:00:00Z',
        channelId: 'channel1',
        title: 'Angular Tutorial',
        description: 'Learn Angular step by step',
        thumbnails: {
          default: { url: 'default1.jpg', width: 120, height: 90 },
          medium: { url: 'medium1.jpg', width: 320, height: 180 },
          high: { url: 'high1.jpg', width: 480, height: 360 },
        },
        channelTitle: 'Angular Channel',
        tags: ['angular', 'tutorial'],
        categoryId: '1',
        liveBroadcastContent: 'none',
        localized: { title: 'Angular Tutorial', description: '' },
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
    {
      kind: 'youtube#video',
      etag: 'etag2',
      id: '2',
      snippet: {
        publishedAt: '2024-01-01T00:00:00Z',
        channelId: 'channel2',
        title: 'React Tutorial',
        description: 'Learn React step by step',
        thumbnails: {
          default: { url: 'default2.jpg', width: 120, height: 90 },
          medium: { url: 'medium2.jpg', width: 320, height: 180 },
          high: { url: 'high2.jpg', width: 480, height: 360 },
        },
        channelTitle: 'React Channel',
        tags: ['react', 'tutorial'],
        categoryId: '2',
        liveBroadcastContent: 'none',
        localized: { title: 'React Tutorial', description: '' },
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
  ];

  let pipe: FilterVideosPipe;

  beforeEach(() => {
    pipe = new FilterVideosPipe();
  });

  it('should return all videos if search query is empty', () => {
    const result = pipe.transform(mockVideos, '');
    expect(result).toEqual(mockVideos);
  });

  it('should return filtered videos by title', () => {
    const result = pipe.transform(mockVideos, 'angular');
    expect(result).toEqual([mockVideos[0]]);
  });

  it('should return filtered videos by description', () => {
    const result = pipe.transform(mockVideos, 'step');
    expect(result).toEqual(mockVideos); // Оба видео имеют "step" в описании
  });

  it('should return filtered videos by tags', () => {
    const result = pipe.transform(mockVideos, 'react');
    expect(result).toEqual([mockVideos[1]]);
  });

  it('should be case insensitive', () => {
    const result = pipe.transform(mockVideos, 'AnGuLaR');
    expect(result).toEqual([mockVideos[0]]);
  });

  it('should handle multiple words in search query', () => {
    const result = pipe.transform(mockVideos, 'angular step');
    expect(result).toEqual([mockVideos[0]]);
  });

  it('should return empty array if no videos match the search query', () => {
    const result = pipe.transform(mockVideos, 'vue');
    expect(result).toEqual([]);
  });

  it('should return original array if items are empty', () => {
    const result = pipe.transform([], 'angular');
    expect(result).toEqual([]);
  });
});
