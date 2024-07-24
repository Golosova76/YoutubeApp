// интерфейс для ответа от search.list API, который включает только id и snippet
import { VideoSnippet } from './search-item.model';

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface SearchResult {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: VideoSnippet;
}

export interface YouTubeSearchResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo: PageInfo;
  items: SearchResult[];
}
