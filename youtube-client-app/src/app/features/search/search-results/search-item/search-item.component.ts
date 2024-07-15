import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
})
export class SearchItemComponent {}
