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
  error: Error | null;
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

/*
export interface AppState {
  videos: VideoState;
  customCards: CustomCard[];
  pagination: {
    currentPage: number;
    pageTokens: { [key: number]: string };
  };
}
export interface VideoState {
  videoEntities: { [id: string]: VideoItem }; // Объект, где ключ - videoId, значение - данные видео
  videoListIds: string[]; // Массив идентификаторов для списка видео
  favoriteIds: string[]; // Массив идентификаторов для списка избранного
  loading: boolean;
  error: Error | null;
}

export const initialState: AppState = {
  videos: {
    videoEntities: {}, // Пустой объект для видео
    videoListIds: [], // Пустой массив для списка видео
    favoriteIds: [], // Пустой массив для избранных видео
    loading: false,
    error: null,
  },
  customCards: [],
  pagination: {
    currentPage: 1,
    pageTokens: {},
  },
};
*/
