import { Pipe, PipeTransform } from '@angular/core';
import { VideoItem } from '../models/search-item.model';

@Pipe({
  name: 'favoriteVideos',
  standalone: true,
})
export class FavoriteVideosPipe implements PipeTransform {
  transform(
    videoEntities: { [id: string]: VideoItem },
    favoriteIds: string[],
  ): VideoItem[] {
    return favoriteIds.map((id) => videoEntities[id]);
  }
}
