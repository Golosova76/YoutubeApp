import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomCard } from 'app/shared/models/search-item.model';
import { DateBackgroundDirective } from 'app/shared/directives/line-back-directive';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [CommonModule, DateBackgroundDirective, CustomButtonComponent],
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() customCard?: CustomCard;

  constructor(private router: Router) {}

  navigateToDetail() {
    if (this.customCard) {
      this.router.navigate([
        'youtube',
        'detailed-information',
        this.customCard.id,
      ]);
    }
  }
}
