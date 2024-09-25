import { Pipe, PipeTransform } from '@angular/core';
import { VideoItem } from '../models/search-item.model';

@Pipe({
  name: 'filterVideosSearchString',
  standalone: true,
})
export class FilterVideosSearchStringPipe implements PipeTransform {
  transform(videos: VideoItem[], searchString: string): VideoItem[] {
    if (!videos || !searchString) {
      return videos; // Если строка поиска пуста, возвращаем все видео
    }
    const lowercasedSearchString = searchString.toLowerCase();
    return videos.filter((video) =>
      video.snippet.title.toLowerCase().includes(lowercasedSearchString),
    );
  }
}
