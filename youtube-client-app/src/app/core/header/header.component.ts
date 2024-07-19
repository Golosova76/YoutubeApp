import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputComponent } from 'app/shared/input/input.component';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, InputComponent, CustomButtonComponent, FormsModule],
})
export class HeaderComponent implements AfterViewInit {
  visible: boolean = false;

  visibleResults: boolean = false;

  // передать событие клика дальше вверх к AppComponent
  @Output() settingsSearchEvent = new EventEmitter<void>(); // открытие панели настроек

  @Output() resultsSearchEvent = new EventEmitter<boolean>(); // открытие панели поиска

  @Output() searchEvent = new EventEmitter<string>(); // поиск

  @ViewChild('searchInput', { static: true }) searchInput!: InputComponent;

  ngAfterViewInit() {
    if (this.searchInput && this.searchInput.inputField) {
      this.searchInput.inputField.nativeElement.addEventListener(
        'input',
        // eslint-disable-next-line @typescript-eslint/comma-dangle
        this.onInput.bind(this),
      );
    }
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.trim().length === 0) {
      this.visibleResults = false;
      this.resultsSearchEvent.emit(this.visibleResults);
    }
  }

  onSearch() {
    const searchValue = this.searchInput.value; // Получаем значение из input
    if (searchValue.trim().length > 0) {
      this.searchEvent.emit(searchValue);
      this.visibleResults = true;
      this.resultsSearchEvent.emit(this.visibleResults);
    } else {
      this.visibleResults = false;
      this.resultsSearchEvent.emit(this.visibleResults);
    }
  }

  handleButtonClick() {
    this.settingsSearch();
  }

  settingsSearch() {
    this.settingsSearchEvent.emit(); // запускаем событие при клике на кнопку
  }
}
