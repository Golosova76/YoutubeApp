import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { VideoItem } from 'app/shared/models/search-item.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEye,
  faHeart,
  faHeartCrack,
  faComments,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-video-statistics',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './video-statistics.component.html',
  styleUrls: ['./video-statistics.component.scss'],
})
export class VideoStatisticsComponent {
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
