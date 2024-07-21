import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputComponent } from 'app/shared/input/input.component';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import { SearchService } from 'app/youtube/services/search.service';
import { Router } from '@angular/router';
import { SortService } from 'app/youtube/services/sortsearch.service';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    CustomButtonComponent,
    FormsModule,
    SearchBarComponent,
  ],
})
export class HeaderComponent {
  @ViewChild('searchInput', { static: true }) searchInput!: InputComponent;

  public sortPanelVisible: boolean = false;

  constructor(
    private router: Router,
    private searchService: SearchService,
  ) {}

  onSearch(): void {
    const searchValue = this.searchInput.value;
    if (searchValue.trim().length > 0) {
      this.searchService.setSearchQuery(searchValue);
      this.router.navigate(['/youtube']);
    } else {
      this.searchService.clearSearchQuery();
      this.router.navigate(['/youtube']); // Возврат на главную страницу
    }
  }

  // кнопка настроек поиска
  handleButtonClick() {
    this.settingsSearch();
  }

  // появление панелт при клике на кнопку
  settingsSearch() {
    this.sortPanelVisible = !this.sortPanelVisible;
  }
}
