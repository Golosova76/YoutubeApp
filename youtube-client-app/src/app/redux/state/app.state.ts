import { CustomCard, VideoItem } from 'app/shared/models/search-item.model';

export interface AppState {
  customCards: CustomCard[];
  videos: VideoItem[];
  pagination: {
    currentPage: number;
    pageTokens: { [key: number]: string };
  };
}

export const initialState: AppState = {
  customCards: [],
  videos: [],
  pagination: {
    currentPage: 1,
    pageTokens: {},
  },
};
