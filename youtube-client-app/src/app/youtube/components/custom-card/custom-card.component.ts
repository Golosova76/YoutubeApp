import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomCard } from 'app/shared/models/search-item.model';
import { DateBackgroundDirective } from 'app/shared/directives/line-back-directive';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [CommonModule, DateBackgroundDirective],
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() customCard?: CustomCard;
}
