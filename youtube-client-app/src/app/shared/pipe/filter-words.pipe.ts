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

    return items.filter((item) => {
      const titleLower = item.snippet.title.toLowerCase();
      const descriptionLower = item.snippet.description.toLowerCase();
      const tags = item.snippet.tags || []; // Убедимся, что tags не undefined, используя пустой массив как запасной

      return words.every(
        (word) =>
          titleLower.includes(word) ||
          descriptionLower.includes(word) ||
          tags.some((tag) => tag.toLowerCase().includes(word)),
      );
    });
  }
}
