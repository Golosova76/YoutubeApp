import { VideoItem } from './search-item.model';

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface YouTubeVideoListResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: VideoItem[];
}

export const createVideosData = (
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  dataResponse: YouTubeVideoListResponse
): YouTubeVideoListResponse => {
  // const kind = dataResponse.kind;
  const { kind, etag } = dataResponse;

  const { totalResults, resultsPerPage } = dataResponse.pageInfo;
  const pageInfo: PageInfo = { totalResults, resultsPerPage };

  // Массив обработанных элементов (VideoItem)
  const items: VideoItem[] = dataResponse.items.map((item) => ({
    kind: item.kind,
    etag: item.etag,
    id: item.id,
    snippet: {
      publishedAt: item.snippet.publishedAt,
      channelId: item.snippet.channelId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnails: item.snippet.thumbnails,
      channelTitle: item.snippet.channelTitle,
      tags: item.snippet.tags,
      categoryId: item.snippet.categoryId,
      liveBroadcastContent: item.snippet.liveBroadcastContent,
      localized: item.snippet.localized,
      defaultAudioLanguage: item.snippet.defaultAudioLanguage,
    },
    statistics: {
      viewCount: item.statistics.viewCount,
      likeCount: item.statistics.likeCount,
      dislikeCount: item.statistics.dislikeCount,
      favoriteCount: item.statistics.favoriteCount,
      commentCount: item.statistics.commentCount,
    },
  }));

  // Создаем объект YouTubeVideoListResponse
  const videosData: YouTubeVideoListResponse = {
    kind,
    etag,
    pageInfo,
    items,
  };

  return videosData;
};
