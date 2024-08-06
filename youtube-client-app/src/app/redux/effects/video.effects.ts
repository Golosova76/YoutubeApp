import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { YoutubeApiService } from 'app/youtube/services/youtube-api.service';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  loadVideos,
  loadVideosSuccess,
  loadVideosFailure,
} from '../actions/actions';

@Injectable()
export class VideoEffects {
  constructor(
    private actions$: Actions,
    private youtubeService: YoutubeApiService,
  ) {}

  loadVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadVideos),
      switchMap((action) =>
        this.youtubeService.searchAndFetchDetails(action.query, 16).pipe(
          map((videos) => loadVideosSuccess({ videos })),
          catchError((error) => of(loadVideosFailure({ error }))),
        ),
      ),
    ),
  );
}
