import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, switchMap } from 'rxjs';
import { environment } from 'environments/environment';
import {
  createVideosData,
  YouTubeVideoListResponse,
} from 'app/shared/models/search-response.model';
import { YouTubeSearchResponse } from 'app/shared/models/search-list-api.model';
import { VideoItem } from 'app/shared/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  private apiKey = environment.youtubeApiKey;

  private searchUrl = environment.youtubeSearchUrl;

  private videosUrl = environment.youtubeVideosUrl;

  private videosSubject = new Subject<VideoItem[]>();

  public videos$ = this.videosSubject.asObservable();

  constructor(private http: HttpClient) {}

  searchVideos(
    query: string,
    maxResults: number = 15,
  ): Observable<YouTubeSearchResponse> {
    const url = `${this.searchUrl}?type=video&part=snippet&maxResults=${maxResults}&q=${query}`;
    return this.http.get<YouTubeSearchResponse>(url, {
      params: { key: this.apiKey },
    });
  }

  getVideoStatistics(videoIds: string[]): Observable<YouTubeVideoListResponse> {
    const ids = videoIds.join(',');
    const url = `${this.videosUrl}?id=${ids}&part=snippet,statistics`;
    return this.http.get<YouTubeVideoListResponse>(url, {
      params: { key: this.apiKey },
    });
  }

  searchAndFetchDetails(query: string, maxResults: number = 16): void {
    console.log('searchAndFetchDetails called with query:', query);
    this.searchVideos(query, maxResults)
      .pipe(
        switchMap((searchResponse: YouTubeSearchResponse) => {
          const videoIds = searchResponse.items.map((item) => item.id.videoId);
          return this.getVideoStatistics(videoIds);
        }),
        map((videoDetailsResponse: YouTubeVideoListResponse) =>
          createVideosData(videoDetailsResponse),
        ),
        map(
          (processedResponse: YouTubeVideoListResponse) =>
            processedResponse.items,
        ),
      )
      .subscribe({
        next: (videos) => {
          console.log('Videos fetched:', videos);
          this.videosSubject.next(videos);
        },
        error: (error) => console.error('Error fetching videos', error),
      });
  }
}
