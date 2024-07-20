import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
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
  @ViewChild('filterInput', { static: true }) filterInput!: InputComponent;

  ngAfterViewInit() {
    this.filterInput.inputField.nativeElement.addEventListener(
      'input',
      this.onInput.bind(this),
    );
  }

  onInput(event: Event) {
    const inputFilterElement = event.target as HTMLInputElement;
    this.filterEvent.emit(inputFilterElement.value);
  }

  @Output() filterEvent = new EventEmitter<string>();

  // EventEmitter отправляет объект с данными о том, как нужно сортировать результаты.
  @Output() sortRequested = new EventEmitter<{
    field: 'date' | 'count';
    order: 'asc' | 'desc';
  }>();

  // Методы вызываются при клике на соответствующие кнопки
  sortByDate() {
    this.sortRequested.emit({ field: 'date', order: 'asc' });
  }

  sortByCount() {
    this.sortRequested.emit({ field: 'count', order: 'asc' });
  }
}
