import { CustomCard, VideoItem } from 'app/shared/models/search-item.model';
//корневая структура state приложения
//объединяет разные slice state
export interface AppState {
  videos: VideoState;
  customCards: CustomCard[];
  pagination: PaginationState;
}

export interface PaginationState {
  currentPage: number;
  pageTokens: { [key: number]: string }; // Ассоциативный массив токенов страниц
}

export const initialPaginationState: PaginationState = {
  currentPage: 1,
  pageTokens: {},
};

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
  pagination: initialPaginationState,
};
