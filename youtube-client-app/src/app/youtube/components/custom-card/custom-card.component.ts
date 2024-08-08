import { Component, Input } from '@angular/core';
import { CustomCard } from 'app/shared/models/search-item.model';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [],
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() customCard?: CustomCard;
}
