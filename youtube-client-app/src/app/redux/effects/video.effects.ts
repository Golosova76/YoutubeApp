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
}
