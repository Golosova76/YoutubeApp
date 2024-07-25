import { Injectable } from '@angular/core';
import { VideoItem } from 'app/shared/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  private _currentVideoData?: VideoItem;

  get currentVideoData(): VideoItem | undefined {
    return this._currentVideoData;
  }

  set currentVideoData(videoData: VideoItem | undefined) {
    this._currentVideoData = videoData;
  }

  clearVideoData(): void {
    this._currentVideoData = undefined;
  }
}
