import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  private apiKey = environment.youtubeApiKey;

  private searchUrl = environment.youtubeSearchUrl;

  private videosUrl = environment.youtubeVideosUrl;

  constructor() {}
}
