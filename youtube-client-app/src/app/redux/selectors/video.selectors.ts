import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideoState } from '../state/app.state';

export const selectVideoState = createFeatureSelector<VideoState>('videos');

export const selectVideoListIds = createSelector(
  selectVideoState,
  (state: VideoState) => state.videoListIds,
);

export const selectVideoEntities = createSelector(
  selectVideoState,
  (state: VideoState) => state.videoEntities,
);

export const selectFilteredVideos = (searchString: string) =>
  createSelector(
    selectVideoListIds,
    selectVideoEntities,
    (videoListIds, videoEntities) => {
      // Если поисковая строка пустая, возвращаем все видео
      if (!searchString) {
        return videoListIds.map((id) => videoEntities[id]);
      }

      // Фильтруем видео на основе строки поиска
      const lowercasedSearchString = searchString.toLowerCase();
      return videoListIds
        .map((id) => videoEntities[id])
        .filter((video) =>
          video.snippet.title.toLowerCase().includes(lowercasedSearchString),
        );
    },
  );
