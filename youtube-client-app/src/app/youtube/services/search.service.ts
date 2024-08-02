import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuery = new Subject<string>();

  public searchQuery$ = this.searchQuery.asObservable();
  // указывает, видимы ли результаты поиска
  private searchResultsVisible: boolean = false;

  // присваиваем searchQuery строку запроса и устанавливаем searchResultsVisible в true
  setSearchQuery(query: string) {
    this.searchQuery.next(query);
    this.searchResultsVisible = true; // Показываем результаты поиска
  }

  clearSearchQuery() {
    this.searchQuery.next('');
    this.searchResultsVisible = false; // Скрываем результаты поиска
  }

  getSearchResultsVisibility() {
    // Возвращает текущее значение searchResultsVisible.
    return this.searchResultsVisible;
  }
}
