import { Pipe, PipeTransform } from '@angular/core';
import { CustomCard, VideoItem } from 'app/shared/models/search-item.model';

@Pipe({
  name: 'filterVideos',
  standalone: true,
  pure: false,
})
export class FilterVideosPipe implements PipeTransform {
  transform(
    items: (VideoItem | CustomCard)[],
    searchQueryWords: string,
  ): (VideoItem | CustomCard)[] {
    if (!items || !searchQueryWords) {
      return items;
    }

    const words = searchQueryWords.toLowerCase().split(' ');

    return items.filter((item) => {
      if ('snippet' in item) {
        // Логика фильтрации для VideoItem
        const titleLower = item.snippet.title.toLowerCase();
        const descriptionLower = item.snippet.description.toLowerCase();
        const tags: string[] = item.snippet.tags || []; // Указываем тип для tags

        return words.every(
          (word) =>
            titleLower.includes(word) ||
            descriptionLower.includes(word) ||
            tags.some((tag: string) => tag.toLowerCase().includes(word)), // Указываем тип для tag
        );
      } else if ('title' in item && 'description' in item) {
        // Логика фильтрации для CustomCard
        const titleLower = item.title.toLowerCase();
        const descriptionLower = item.description.toLowerCase();

        return words.every(
          (word) =>
            titleLower.includes(word) || descriptionLower.includes(word),
        );
      }
      return false;
    });
  }
}
