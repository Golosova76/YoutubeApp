import { Pipe, PipeTransform } from '@angular/core';
import { CustomCard } from 'app/shared/models/search-item.model';

@Pipe({
  name: 'filterCustomCards',
  standalone: true,
  pure: false,
})
export class FilterCustomCardsPipe implements PipeTransform {
  transform(items: CustomCard[], searchQueryWords: string): CustomCard[] {
    if (!items || !searchQueryWords) {
      return items;
    }

    const words = searchQueryWords.toLowerCase().split(' ');

    return items.filter((item) => {
      const titleLower = item.title.toLowerCase();
      const descriptionLower = item.description.toLowerCase();

      return words.every(
        (word) => titleLower.includes(word) || descriptionLower.includes(word),
      );
    });
  }
}
