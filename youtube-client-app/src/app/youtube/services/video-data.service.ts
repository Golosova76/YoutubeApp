import { Injectable } from '@angular/core';
import { VideoItem } from 'app/shared/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  set currentVideoData(videoData: VideoItem | undefined) {
    localStorage.setItem('currentVideo', JSON.stringify(videoData));
  }

  get currentVideoData(): VideoItem | undefined {
    const videoData = localStorage.getItem('currentVideo');
    return videoData ? JSON.parse(videoData) : undefined;
  }

  clearVideoData() {
    localStorage.removeItem('currentVideo');
  }
}
