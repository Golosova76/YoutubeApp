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
      withLatestFrom(this.store.select(selectVideoState)),
      filter(([action]) => !!action.query && action.query.trim().length > 2),
      switchMap(([action]) => {
        return this.youtubeService.searchAndFetchDetails(action.query, 8).pipe(
          map((videos) => {
            const videoEntities = videos.reduce((entities, video) => {
              return { ...entities, [video.id]: video };
            }, {});
            const videoListIds = videos.map((video) => video.id);
            return loadVideosSuccess({ videoEntities, videoListIds });
          }),
          catchError((error) => of(loadVideosFailure({ error }))),
        );
      }),
    ),
  );
}
