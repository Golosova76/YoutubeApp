import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { environment } from 'environments/environment';
import { YouTubeVideoListResponse } from 'app/shared/models/search-response.model';
import { YouTubeSearchResponse } from 'app/shared/models/search-list-api.model';
import { VideoItem } from 'app/shared/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  private apiKey = environment.youtubeApiKey;

  private searchUrl = environment.youtubeSearchUrl;

  private videosUrl = environment.youtubeVideosUrl;

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

  searchAndFetchDetails(
    query: string,
    maxResults: number = 15,
  ): Observable<VideoItem[]> {
    return this.searchVideos(query, maxResults).pipe(
      switchMap((searchResponse: YouTubeSearchResponse) => {
        const videoIds = searchResponse.items.map((item) => item.id.videoId);
        return this.getVideoStatistics(videoIds);
      }),
      map((videoDetailsResponse: YouTubeVideoListResponse) => {
        return videoDetailsResponse.items;
      }),
    );
  }
}
