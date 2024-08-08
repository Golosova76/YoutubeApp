import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { YoutubeApiService } from 'app/youtube/services/youtube-api.service';
import { catchError, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import {
  loadVideos,
  loadVideosSuccess,
  loadVideosFailure,
} from '../actions/actions';
import { Store } from '@ngrx/store';
import { VideoState } from '../state/app.state';
import { selectVideoState } from '../selectors/video.selectors';

@Injectable()
export class VideoEffects {
  constructor(
    private actions$: Actions,
    private youtubeService: YoutubeApiService,
    private store: Store<{ videos: VideoState }>,
  ) {}

  /*
  loadVideos$ = createEffect(() =>
    this.actions$.pipe(
      // Фильтруем только действия типа 'loadVideos' Перехват действия с ofType
      ofType(loadVideos),
      tap((action) => console.log('Loading videos for query:', action.query)),
      // Переключаемся на новый поток, выполняющий HTTP-запрос
      switchMap((action) =>
        // Запрос к сервису для получения видео
        this.youtubeService.searchAndFetchDetails(action.query, 16).pipe(
          tap((videos) => console.log('Videos received from service:', videos)),
          // Если запрос успешен, создаем и отправляем действие 'loadVideosSuccess'
          map((videos) => loadVideosSuccess({ videos })),
          // Если запрос завершился ошибкой, создаем и отправляем действие 'loadVideosFailure'
          catchError((error) => of(loadVideosFailure({ error }))),
        ),
      ),
    ),
  );
  */

  loadVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadVideos),
      tap((action) => console.log('Loading videos for query:', action.query)),
      withLatestFrom(this.store.select(selectVideoState)), // Получаем данные из стора
      switchMap(([action, state]) => {
        console.log('Current video state:', state);
        return this.youtubeService.searchAndFetchDetails(action.query, 16).pipe(
          tap((videos) => console.log('Videos received from service:', videos)),
          map((videos) => loadVideosSuccess({ videos })),
          catchError((error) => of(loadVideosFailure({ error }))),
        );
      }),
    ),
  );
}
