import { Thumbnails, VideoItem } from './search-item.model';

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
  const items: VideoItem[] = dataResponse.items.map((item) => {
    const thumbnails: Thumbnails = {
      default: {
        url: item.snippet.thumbnails.default.url,
        width: item.snippet.thumbnails.default.width,
        height: item.snippet.thumbnails.default.height,
      },
      medium: {
        url: item.snippet.thumbnails.medium.url,
        width: item.snippet.thumbnails.medium.width,
        height: item.snippet.thumbnails.medium.height,
      },
      high: {
        url: item.snippet.thumbnails.high.url,
        width: item.snippet.thumbnails.high.width,
        height: item.snippet.thumbnails.high.height,
      },
      standard: item.snippet.thumbnails.standard
        ? {
            url: item.snippet.thumbnails.standard.url,
            width: item.snippet.thumbnails.standard.width,
            height: item.snippet.thumbnails.standard.height,
          }
        : undefined,
      maxres: item.snippet.thumbnails.maxres
        ? {
            url: item.snippet.thumbnails.maxres.url,
            width: item.snippet.thumbnails.maxres.width,
            height: item.snippet.thumbnails.maxres.height,
          }
        : undefined,
    };

    return {
      kind: item.kind,
      etag: item.etag,
      id: item.id,
      snippet: {
        publishedAt: item.snippet.publishedAt,
        channelId: item.snippet.channelId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnails,
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
    };
  });

  // Создаем объект YouTubeVideoListResponse
  const videosData: YouTubeVideoListResponse = {
    kind,
    etag,
    pageInfo,
    items,
  };

  return videosData;
};
