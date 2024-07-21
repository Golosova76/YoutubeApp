import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import { InputComponent } from 'app/shared/input/input.component';
import { SortService } from 'app/youtube/services/sortsearch';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, CustomButtonComponent, InputComponent],
})
export class SearchBarComponent {
  @ViewChild('filterInput', { static: true }) filterInput!: InputComponent;

  constructor(private sortService: SortService) {}

  ngAfterViewInit() {
    this.filterInput.inputField.nativeElement.addEventListener(
      'input',
      this.onInput.bind(this),
    );
  }

  onInput(event: Event) {
    const inputFilterElement = event.target as HTMLInputElement;
    // Передача значения в сервис для фильтрации
    this.sortService.setSearchQuery(inputFilterElement.value);
  }

  // Методы вызываются при клике на соответствующие кнопки
  sortByDate() {
    this.sortService.setsortField('date'); // Установка поля и порядка сортировки через сервис
    this.sortService.setsortOrder('asc');
  }

  sortByCount() {
    this.sortService.setsortField('count'); // Установка поля и порядка сортировки через сервис
    this.sortService.setsortOrder('asc');
  }
}
