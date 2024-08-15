import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YouTubeVideoListResponse } from 'app/shared/models/search-response.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<YouTubeVideoListResponse>> {
    const modifiedReq = req.clone({
      params: req.params.set('key', environment.youtubeApiKey),
    });

    return next.handle(modifiedReq) as Observable<
      HttpEvent<YouTubeVideoListResponse>
    >;
  }
}
