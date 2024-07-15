import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import {
  faEye,
  faHeart,
  faHeartCrack,
  faComments,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  standalone: true,
  imports: [CommonModule, CustomButtonComponent, FontAwesomeModule],
})
export class SearchItemComponent {
  stats = [
    { icon: faEye, value: 0 },
    { icon: faHeart, value: 0 },
    { icon: faHeartCrack, value: 0 },
    { icon: faComments, value: 0 },
  ];
}
