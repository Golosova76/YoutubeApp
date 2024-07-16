import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { SearchComponent } from './features/search/search.component';
import { SearchResultsComponent } from './features/search/search-results/search-results.component';

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
  ],
})
export class AppComponent {
  title = 'youtube-client-app';

  searchBarVisible: boolean = false;

  searchResultsVisible: boolean = false;

  searchQuery: string = '';

  handleBarSearch() {
    this.searchBarVisible = !this.searchBarVisible;
  }

  handleSearchResults(visibleResults: boolean) {
    this.searchResultsVisible = visibleResults;
  }

  handleSearch(searchQuery: string) {
    this.searchQuery = searchQuery;
  }
}
