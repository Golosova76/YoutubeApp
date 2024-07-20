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
import { SearchService } from 'app/youtube/services/search';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, InputComponent, CustomButtonComponent, FormsModule],
})
export class HeaderComponent {
  // передать событие клика на кнопке настроек поиска дальше вверх к AppComponent
  @Output() settingsSearchEvent = new EventEmitter<void>(); // открытие панели настроек

  @ViewChild('searchInput', { static: true }) searchInput!: InputComponent;

  constructor(
    private router: Router,
    private searchService: SearchService,
  ) {}

  onSearch(): void {
    const searchValue = this.searchInput.value;
    if (searchValue.trim().length > 0) {
      this.searchService.setSearchQuery(searchValue);
      this.router.navigate(['/search-results', { query: searchValue }]);
    } else {
      this.searchService.clearSearchQuery();
      this.router.navigate(['/main-page']); // Возврат на главную страницу
    }
  }

  // кнопка настроек поиска
  handleButtonClick() {
    this.settingsSearch();
  }

  // запускаем событие при клике на кнопку
  settingsSearch() {
    this.settingsSearchEvent.emit();
  }
}
