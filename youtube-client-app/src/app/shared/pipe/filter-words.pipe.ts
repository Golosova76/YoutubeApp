import { Pipe, PipeTransform } from '@angular/core';
import { VideoItem } from 'app/shared/models/search-item.model';

@Pipe({
  name: 'filterVideos',
  standalone: true,
  pure: false,
})
export class FilterVideosPipe implements PipeTransform {
  transform(items: VideoItem[], searchQueryWords: string): VideoItem[] {
    if (!items || !searchQueryWords) {
      return items;
    }

    const words = searchQueryWords.toLowerCase().split(' ');

    return items.filter((item) =>
      words.every(
        (word) =>
          item.snippet.title.toLowerCase().includes(word) ||
          item.snippet.description.toLowerCase().includes(word) ||
          item.snippet.tags.some((tag) => tag.toLowerCase().includes(word)),
      ),
    );
  }
}
