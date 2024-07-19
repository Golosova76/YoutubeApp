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
    const validSortFields = ['date', 'count'];
    if (!validSortFields.includes(sortField)) {
      console.error(`Invalid sortField: ${sortField}`);
      return items;
    }

    const getValue = (item: VideoItem): number => {
      switch (sortField) {
        case 'date':
          return item.snippet?.publishedAt
            ? new Date(item.snippet.publishedAt).getTime()
            : 0;
        case 'count':
          return item.statistics?.viewCount ? +item.statistics.viewCount : 0;
        default:
          return 0;
      }
    };

    return items.sort((a, b) => {
      const valueA = getValue(a);
      const valueB = getValue(b);
      return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
    });
  }
}
