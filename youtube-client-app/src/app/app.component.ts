import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { SearchComponent } from './features/search/search.component';
import { SearchResultsComponent } from './features/search/search-results/search-results.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    LoginPageComponent,
  ],
})
export class AppComponent {
  title = 'youtube-client-app';

  searchBarVisible: boolean = false;

  searchResultsVisible: boolean = false;

  searchQuery: string = '';

  searchQueryWords: string = '';

  sortField: 'date' | 'count' = 'date';

  sortOrder: 'asc' | 'desc' = 'asc';

  handleBarSearch() {
    this.searchBarVisible = !this.searchBarVisible;
  }

  handleSearchResults(visibleResults: boolean) {
    this.searchResultsVisible = visibleResults;
  }

  handleSearch(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

  handleSortChange(sortData: {
    field: 'date' | 'count';
    order: 'asc' | 'desc';
  }) {
    if (this.sortField === sortData.field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = sortData.field;
      this.sortOrder = 'asc';
    }
  }

  handleFilterEvent(query: string) {
    this.searchQueryWords = query;
  }
}
