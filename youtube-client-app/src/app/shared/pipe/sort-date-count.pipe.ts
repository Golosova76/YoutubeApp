import { Pipe, PipeTransform } from '@angular/core';
import { VideoItem } from 'app/shared/models/search-item.model';

@Pipe({
  name: 'sortVideos',
  standalone: true,
  pure: false,
})
export class SortVideosPipe implements PipeTransform {
  transform(
    items: VideoItem[],
    sortField: string,
    sortOrder: string,
  ): VideoItem[] {
    if (!items || !sortField) {
      return items;
    }

    // Проверка и приведение sortField к допустимым значениям
    const validSortFields: ('date' | 'count')[] = ['date', 'count'];
    if (!validSortFields.includes(sortField as 'date' | 'count')) {
      console.error(`Invalid sortField: ${sortField}`);
      return items;
    }

    return items.sort((a, b) => {
      let valueA: number = 0; // Инициализация значением 0
      let valueB: number = 0; // Инициализация значением 0

      if (sortField === 'date') {
        valueA = a.snippet?.publishedAt
          ? new Date(a.snippet.publishedAt).getTime()
          : 0;
        valueB = b.snippet?.publishedAt
          ? new Date(b.snippet.publishedAt).getTime()
          : 0;
      } else if (sortField === 'count') {
        valueA = a.statistics?.viewCount
          ? parseInt(a.statistics.viewCount, 10)
          : 0;
        valueB = b.statistics?.viewCount
          ? parseInt(b.statistics.viewCount, 10)
          : 0;
      }

      return valueA < valueB
        ? sortOrder === 'asc'
          ? -1
          : 1
        : valueA > valueB
          ? sortOrder === 'asc'
            ? 1
            : -1
          : 0;
    });
  }
}
