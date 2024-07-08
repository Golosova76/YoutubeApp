// export default class SearchResponse {}

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
