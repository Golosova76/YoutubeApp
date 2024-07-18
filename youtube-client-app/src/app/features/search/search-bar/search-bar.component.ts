import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import { InputComponent } from 'app/shared/input/input.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, CustomButtonComponent, InputComponent],
})
export class SearchBarComponent {
  // EventEmitter отправляет объект с данными о том, как нужно сортировать результаты.
  @Output() sortRequested = new EventEmitter<{
    field: string;
    order: string;
  }>();

  // Методы вызываются при клике на соответствующие кнопки
  sortByDate() {
    console.log('sortByDate called in SearchBarComponent');
    this.sortRequested.emit({ field: 'date', order: 'asc' });
  }

  sortByCount() {
    console.log('sortByCount called in SearchBarComponent');
    this.sortRequested.emit({ field: 'count', order: 'asc' });
  }
}
