import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { YoutubeApiService } from 'app/youtube/services/youtube-api.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
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
      tap((action) => console.log('Loading videos for query:', action.query)),
      switchMap((action) =>
        this.youtubeService.searchAndFetchDetails(action.query, 16).pipe(
          tap((videos) => console.log('Videos received from service:', videos)),
          map((videos) => loadVideosSuccess({ videos })),
          catchError((error) => of(loadVideosFailure({ error }))),
        ),
      ),
    ),
  );
}
