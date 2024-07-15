import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import {
  faEye,
  faHeart,
  faHeartCrack,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { VideoItem } from 'app/shared/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  standalone: true,
  imports: [CommonModule, CustomButtonComponent, FontAwesomeModule],
})
export class SearchItemComponent {
  @Input() videoData?: VideoItem;

  // getter для динамического вычисления статистики
  get stats() {
    if (!this.videoData) {
      // Возвращаем пустой массив или массив с нулевыми значениями, если videoData нет
      return [
        { icon: faEye, value: 0 },
        { icon: faHeart, value: 0 },
        { icon: faHeartCrack, value: 0 },
        { icon: faComments, value: 0 },
      ];
    }

    // Если videoData доступен, возвращаем актуальные значения
    return [
      { icon: faEye, value: this.videoData.statistics?.viewCount || 0 },
      { icon: faHeart, value: this.videoData.statistics?.likeCount || 0 },
      {
        icon: faHeartCrack,
        value: this.videoData.statistics?.dislikeCount || 0,
      },
      { icon: faComments, value: this.videoData.statistics?.commentCount || 0 },
    ];
  }
}
