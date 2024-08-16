import {
  CustomCard,
  VideoItem,
  VideoSnippet,
  VideoStatistics,
} from './search-item.model';

describe('Models', () => {
  it('should create an instance of VideoSnippet', () => {
    const videoSnippet: VideoSnippet = {
      publishedAt: '2024-01-01T00:00:00Z',
      channelId: 'channelId1',
      title: 'Test Video',
      description: 'Test description',
      thumbnails: {
        default: { url: 'default.jpg', width: 120, height: 90 },
        medium: { url: 'medium.jpg', width: 320, height: 180 },
        high: { url: 'high.jpg', width: 480, height: 360 },
        standard: { url: 'standard.jpg', width: 640, height: 480 },
        maxres: { url: 'maxres.jpg', width: 1280, height: 720 },
      },
      channelTitle: 'Test Channel',
      tags: ['test', 'video'],
      categoryId: '1',
      liveBroadcastContent: 'none',
      localized: {
        title: 'Localized Title',
        description: 'Localized description',
      },
      defaultAudioLanguage: 'en',
    };

    expect(videoSnippet).toBeTruthy();
    expect(videoSnippet.title).toBe('Test Video');
    expect(videoSnippet.thumbnails.maxres?.url).toBe('maxres.jpg');
  });

  it('should create an instance of VideoStatistics', () => {
    const videoStatistics: VideoStatistics = {
      viewCount: '1000',
      likeCount: '100',
      dislikeCount: '10',
      favoriteCount: '0',
      commentCount: '20',
    };

    expect(videoStatistics).toBeTruthy();
    expect(videoStatistics.viewCount).toBe('1000');
  });

  it('should create an instance of VideoItem', () => {
    const videoSnippet: VideoSnippet = {
      publishedAt: '2024-01-01T00:00:00Z',
      channelId: 'channelId1',
      title: 'Test Video',
      description: 'Test description',
      thumbnails: {
        default: { url: 'default.jpg', width: 120, height: 90 },
        medium: { url: 'medium.jpg', width: 320, height: 180 },
        high: { url: 'high.jpg', width: 480, height: 360 },
      },
      channelTitle: 'Test Channel',
      tags: ['test', 'video'],
      categoryId: '1',
      liveBroadcastContent: 'none',
      localized: {
        title: 'Localized Title',
        description: 'Localized description',
      },
      defaultAudioLanguage: 'en',
    };

    const videoStatistics: VideoStatistics = {
      viewCount: '1000',
      likeCount: '100',
      dislikeCount: '10',
      favoriteCount: '0',
      commentCount: '20',
    };

    const videoItem: VideoItem = {
      kind: 'youtube#video',
      etag: 'etag1',
      id: 'videoId1',
      snippet: videoSnippet,
      statistics: videoStatistics,
    };

    expect(videoItem).toBeTruthy();
    expect(videoItem.kind).toBe('youtube#video');
    expect(videoItem.snippet.title).toBe('Test Video');
  });

  it('should create an instance of CustomCard', () => {
    const customCard: CustomCard = {
      id: '1',
      title: 'Custom Card Title',
      description: 'Custom card description',
      imageUrl: 'image.jpg',
      videoUrl: 'video.mp4',
      creationDate: new Date('2023-08-15'),
    };

    expect(customCard).toBeTruthy();
    expect(customCard.title).toBe('Custom Card Title');
    expect(customCard.creationDate).toEqual(new Date('2023-08-15'));
  });
});
