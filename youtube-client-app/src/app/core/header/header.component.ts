import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
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
export class HeaderComponent {
  visible: boolean = false;

  visibleResults: boolean = false;

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  onSearch() {
    const searchValue = this.searchInput.nativeElement.value; // Получаем значение прямо из input
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

  // передать событие клика дальше вверх к AppComponent
  @Output() settingsSearchEvent = new EventEmitter<void>(); // открытие панели настроек

  @Output() resultsSearchEvent = new EventEmitter<boolean>(); // открытие панели поиска

  @Output() searchEvent = new EventEmitter<string>(); // поиск

  settingsSearch() {
    this.settingsSearchEvent.emit(); // запускаем событие при клике на кнопку
  }
}
