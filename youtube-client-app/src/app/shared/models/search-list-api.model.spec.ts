import { VideoSnippet } from './search-item.model';
import { SearchResult, YouTubeSearchResponse } from './search-list-api.model';
import { PageInfo } from './search-response.model';

describe('SearchResult Model', () => {
  it('should create an instance of SearchResult', () => {
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
      localized: { title: 'Test Video', description: 'Test description' },
      defaultAudioLanguage: 'en',
    };

    const searchResult: SearchResult = {
      kind: 'youtube#searchResult',
      etag: 'etag1',
      id: {
        kind: 'youtube#video',
        videoId: 'videoId1',
      },
      snippet: videoSnippet,
    };

    expect(searchResult).toBeTruthy();
    expect(searchResult.kind).toBe('youtube#searchResult');
    expect(searchResult.snippet.title).toBe('Test Video');
  });
});

describe('YouTubeSearchResponse Model', () => {
  it('should create an instance of YouTubeSearchResponse with all required fields', () => {
    const pageInfo: PageInfo = {
      totalResults: 100,
      resultsPerPage: 10,
    };

    const searchResult: SearchResult = {
      kind: 'youtube#searchResult',
      etag: 'etag1',
      id: {
        kind: 'youtube#video',
        videoId: 'videoId1',
      },
      snippet: {
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
        localized: { title: 'Test Video', description: 'Test description' },
        defaultAudioLanguage: 'en',
      },
    };

    const response: YouTubeSearchResponse = {
      kind: 'youtube#searchListResponse',
      etag: 'etag2',
      pageInfo,
      items: [searchResult],
    };

    expect(response).toBeTruthy();
    expect(response.pageInfo.totalResults).toBe(100);
    expect(response.items.length).toBe(1);
    expect(response.items[0].snippet.title).toBe('Test Video');
  });

  it('should create an instance of YouTubeSearchResponse with optional fields', () => {
    const pageInfo: PageInfo = {
      totalResults: 100,
      resultsPerPage: 10,
    };

    const searchResult: SearchResult = {
      kind: 'youtube#searchResult',
      etag: 'etag1',
      id: {
        kind: 'youtube#video',
        videoId: 'videoId1',
      },
      snippet: {
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
        localized: { title: 'Test Video', description: 'Test description' },
        defaultAudioLanguage: 'en',
      },
    };

    const response: YouTubeSearchResponse = {
      kind: 'youtube#searchListResponse',
      etag: 'etag2',
      pageInfo,
      items: [searchResult],
      nextPageToken: 'nextPageToken123',
      regionCode: 'US',
    };

    expect(response.nextPageToken).toBe('nextPageToken123');
    expect(response.regionCode).toBe('US');
  });
});
