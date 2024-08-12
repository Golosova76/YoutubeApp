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
  private searchUrl = environment.youtubeSearchUrl;

  private videosUrl = environment.youtubeVideosUrl;

  private videosSubject = new Subject<VideoItem[]>();

  public videos$ = this.videosSubject.asObservable();

  constructor(private http: HttpClient) {}

  searchVideos(
    q: string,
    maxResults: number = 40,
    nextPageToken?: string,
  ): Observable<YouTubeSearchResponse> {
    const params: {
      type: string;
      part: string;
      maxResults: number;
      q: string;
      pageToken?: string; // Здесь добавляем токен страницы как опциональный параметр
    } = {
      type: 'video',
      part: 'snippet',
      maxResults,
      q,
    };

    // Если передан токен страницы, добавляем его в параметры запроса
    if (nextPageToken) {
      params.pageToken = nextPageToken;
    }

    return this.http.get<YouTubeSearchResponse>(this.searchUrl, { params });
  }

  getVideoStatistics(videoIds: string[]): Observable<YouTubeVideoListResponse> {
    const ids = videoIds.join(',');
    const params = {
      id: ids,
      part: 'snippet,statistics',
    };
    return this.http.get<YouTubeVideoListResponse>(this.videosUrl, { params });
  }

  searchAndFetchDetails(
    query: string,
    maxResults: number = 40,
    nextPageToken?: string, // Используем nextPageToken вместо pageToken
  ): Observable<YouTubeVideoListResponse> {
    return this.searchVideos(query, maxResults, nextPageToken).pipe(
      switchMap((searchResponse: YouTubeSearchResponse) => {
        const videoIds = searchResponse.items.map((item) => item.id.videoId);
        return this.getVideoStatistics(videoIds).pipe(
          map((videoDetailsResponse: YouTubeVideoListResponse) => ({
            ...createVideosData(videoDetailsResponse), // Объединяем полученные данные
            nextPageToken: searchResponse.nextPageToken, // Передаем nextPageToken из searchResponse
          })),
        );
      }),
    );
  }
}
