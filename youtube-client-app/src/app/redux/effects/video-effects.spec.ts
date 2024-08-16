import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { VideoEffects } from './video.effects';
import { YoutubeApiService } from 'app/youtube/services/youtube-api.service';
import {
  loadVideos,
  loadVideosSuccess,
  loadVideosFailure,
} from '../actions/actions';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectVideoState } from '../selectors/video.selectors';
import { Action } from '@ngrx/store';
import { VideoItem } from 'app/shared/models/search-item.model';

describe('VideoEffects', () => {
  let actions$: Observable<Action>;
  let effects: VideoEffects;
  let youtubeApiService: jest.Mocked<YoutubeApiService>;
  let store: MockStore;

  beforeEach(() => {
    const mockYoutubeService = {
      searchAndFetchDetails: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        VideoEffects,
        provideMockActions(() => actions$),
        { provide: YoutubeApiService, useValue: mockYoutubeService },
        provideMockStore({
          selectors: [
            {
              selector: selectVideoState,
              value: { videoEntities: {}, videoListIds: [] },
            },
          ],
        }),
      ],
    });

    effects = TestBed.inject(VideoEffects);
    youtubeApiService = TestBed.inject(
      YoutubeApiService,
    ) as jest.Mocked<YoutubeApiService>;
    store = TestBed.inject(MockStore);
  });

  it('should dispatch loadVideosSuccess when videos are loaded successfully', (done) => {
    const mockVideos: VideoItem[] = [
      { id: '1', snippet: { title: 'Video 1' } } as VideoItem,
      { id: '2', snippet: { title: 'Video 2' } } as VideoItem,
    ];

    const action = loadVideos({ query: 'angular' });
    const successAction = loadVideosSuccess({
      videoEntities: {
        '1': mockVideos[0],
        '2': mockVideos[1],
      },
      videoListIds: ['1', '2'],
    });

    actions$ = of(action);
    youtubeApiService.searchAndFetchDetails.mockReturnValue(of(mockVideos));

    effects.loadVideos$.subscribe((result) => {
      expect(result).toEqual(successAction);
      done();
    });
  });

  it('should dispatch loadVideosFailure when there is an error', (done) => {
    const action = loadVideos({ query: 'angular' });
    const error = new Error('Error loading videos');
    const failureAction = loadVideosFailure({ error });

    actions$ = of(action);
    youtubeApiService.searchAndFetchDetails.mockReturnValue(
      throwError(() => error),
    );

    effects.loadVideos$.subscribe((result) => {
      expect(result).toEqual(failureAction);
      done();
    });
  });
});
