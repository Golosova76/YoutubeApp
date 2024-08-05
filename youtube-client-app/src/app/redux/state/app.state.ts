import { CustomCard, VideoItem } from 'app/shared/models/search-item.model';

export interface AppState {
  videos: VideoState;
  customCards: CustomCard[];
  pagination: {
    currentPage: number;
    pageTokens: { [key: number]: string };
  };
}

export interface VideoState {
  items: VideoItem[];
  loading: boolean;
  error: any;
}

export const initialState: AppState = {
  videos: {
    items: [],
    loading: false,
    error: null,
  },
  customCards: [],
  pagination: {
    currentPage: 1,
    pageTokens: {},
  },
};
