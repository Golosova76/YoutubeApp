import {
  createVideosData,
  YouTubeVideoListResponse,
} from './search-response.model';

describe('createVideosData', () => {
  const mockDataResponse: YouTubeVideoListResponse = {
    kind: 'youtube#videoListResponse',
    etag: 'etag123',
    pageInfo: {
      totalResults: 100,
      resultsPerPage: 10,
    },
    items: [
      {
        kind: 'youtube#video',
        etag: 'etagItem1',
        id: 'videoId1',
        snippet: {
          publishedAt: '2024-01-01T00:00:00Z',
          channelId: 'channel1',
          title: 'Test Video 1',
          description: 'Test description 1',
          thumbnails: {
            default: { url: 'default1.jpg', width: 120, height: 90 },
            medium: { url: 'medium1.jpg', width: 320, height: 180 },
            high: { url: 'high1.jpg', width: 480, height: 360 },
            standard: { url: 'standard1.jpg', width: 640, height: 480 },
            maxres: { url: 'maxres1.jpg', width: 1280, height: 720 },
          },
          channelTitle: 'Test Channel 1',
          tags: ['tag1', 'tag2'],
          categoryId: '1',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Localized Title 1',
            description: 'Localized Description 1',
          },
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
        etag: 'etagItem2',
        id: 'videoId2',
        snippet: {
          publishedAt: '2024-02-01T00:00:00Z',
          channelId: 'channel2',
          title: 'Test Video 2',
          description: 'Test description 2',
          thumbnails: {
            default: { url: 'default2.jpg', width: 120, height: 90 },
            medium: { url: 'medium2.jpg', width: 320, height: 180 },
            high: { url: 'high2.jpg', width: 480, height: 360 },
          },
          channelTitle: 'Test Channel 2',
          tags: ['tag3', 'tag4'],
          categoryId: '2',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Localized Title 2',
            description: 'Localized Description 2',
          },
          defaultAudioLanguage: 'en',
        },
        statistics: {
          viewCount: '2000',
          likeCount: '200',
          dislikeCount: '20',
          favoriteCount: '10',
          commentCount: '30',
        },
      },
    ],
  };

  it('should create a valid YouTubeVideoListResponse object', () => {
    const result = createVideosData(mockDataResponse);

    expect(result).toBeTruthy();
    expect(result.kind).toBe('youtube#videoListResponse');
    expect(result.etag).toBe('etag123');
    expect(result.pageInfo.totalResults).toBe(100);
    expect(result.items.length).toBe(2);

    // Проверка первого элемента
    const firstItem = result.items[0];
    expect(firstItem.kind).toBe('youtube#video');
    expect(firstItem.snippet.title).toBe('Test Video 1');
    expect(firstItem.snippet.thumbnails.standard?.url).toBe('standard1.jpg');
    expect(firstItem.snippet.thumbnails.maxres?.url).toBe('maxres1.jpg');
    expect(firstItem.statistics.viewCount).toBe('1000');

    // Проверка второго элемента
    const secondItem = result.items[1];
    expect(secondItem.snippet.thumbnails.standard).toBeUndefined();
    expect(secondItem.snippet.thumbnails.maxres).toBeUndefined();
  });

  it('should correctly handle missing optional fields in thumbnails', () => {
    const mockDataWithoutOptionalThumbnails: YouTubeVideoListResponse = {
      ...mockDataResponse,
      items: [
        {
          ...mockDataResponse.items[0],
          snippet: {
            ...mockDataResponse.items[0].snippet,
            thumbnails: {
              default: { url: 'default.jpg', width: 120, height: 90 },
              medium: { url: 'medium.jpg', width: 320, height: 180 },
              high: { url: 'high.jpg', width: 480, height: 360 },
            },
          },
        },
      ],
    };

    const result = createVideosData(mockDataWithoutOptionalThumbnails);
    const item = result.items[0];

    expect(item.snippet.thumbnails.standard).toBeUndefined();
    expect(item.snippet.thumbnails.maxres).toBeUndefined();
  });
});
