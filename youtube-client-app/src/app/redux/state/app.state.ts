import { CustomCard, VideoItem } from 'app/shared/models/search-item.model';
//корневая структура state приложения
//объединяет разные slice state
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

//Начальное состояние store
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
