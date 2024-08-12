import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { YoutubeApiService } from 'app/youtube/services/youtube-api.service';
import { catchError, filter, map, of, switchMap, withLatestFrom } from 'rxjs';
import {
  loadVideos,
  loadVideosSuccess,
  loadVideosFailure,
} from '../actions/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectVideoState } from '../selectors/video.selectors';
import { selectCustomCards } from '../selectors/custom-card.selectors';
import { selectPaginationState } from '../selectors/pagination.selectors';
import { setPageToken } from '../actions/pagination.actions';

@Injectable()
export class VideoEffects {
  constructor(
    private actions$: Actions,
    private youtubeService: YoutubeApiService,
    private store: Store<AppState>,
  ) {}

  loadVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadVideos),
      withLatestFrom(
        this.store.select(selectCustomCards), // Получаем пользовательские карточки
        this.store.select(selectPaginationState),
      ),
      switchMap(([action, customCards, paginationState]) => {
        const numberOfCustomCards = customCards.length;
        const remainingSlots = 40 - numberOfCustomCards;

        if (remainingSlots <= 0) {
          // Если у нас уже достаточно пользовательских карточек, просто возвращаем пустой успех
          return of(loadVideosSuccess({ videoEntities: {}, videoListIds: [] }));
        }

        const pageToken =
          paginationState.pageTokens[paginationState.currentPage] || '';

        return this.youtubeService
          .searchAndFetchDetails(action.query, remainingSlots, pageToken)
          .pipe(
            switchMap((response) => {
              const { items: videos, nextPageToken } = response;

              const videoEntities = videos.reduce((entities, video) => {
                return { ...entities, [video.id]: video };
              }, {});
              const videoListIds = videos.map((video) => video.id);

              // Сначала отправляем действие с загруженными видео
              const successAction = loadVideosSuccess({
                videoEntities,
                videoListIds,
              });

              // Если есть nextPageToken, отправляем действие для его сохранения
              const pageTokenAction = nextPageToken
                ? setPageToken({
                    pageNumber: paginationState.currentPage + 1,
                    pageToken: nextPageToken,
                  })
                : null;

              // Возвращаем действия одно за другим
              return pageTokenAction
                ? [successAction, pageTokenAction] // Возвращаем оба действия
                : [successAction]; // Если нет токена, возвращаем только действие загрузки видео
            }),
            catchError((error) => of(loadVideosFailure({ error }))),
          );
      }),
    ),
  );
}
