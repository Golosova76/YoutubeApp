import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { YoutubeApiService } from 'app/youtube/services/youtube-api.service';
import {
  catchError,
  filter,
  map,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
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

  loadVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadVideos),
      withLatestFrom(this.store.select(selectVideoState)), // Получаем данные из стора
      filter(([action]) => !!action.query && action.query.trim().length > 2),
      switchMap(([action]) => {
        return this.youtubeService.searchAndFetchDetails(action.query, 16).pipe(
          map((videos) => loadVideosSuccess({ videos })),
          catchError((error) => of(loadVideosFailure({ error }))),
        );
      }),
    ),
  );
}
