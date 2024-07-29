import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  //переменная для хранения строки поиска
  private searchQuery: string = '';
  // указывает, видимы ли результаты поиска
  private searchResultsVisible: boolean = false;

  // присваиваем searchQuery строку запроса и устанавливаем searchResultsVisible в true
  setSearchQuery(query: string) {
    this.searchQuery = query;
    this.searchResultsVisible = true; // Показываем результаты поиска
  }

  getSearchQuery() {
    //Возвращает текущее значение searchQuery.
    return this.searchQuery;
  }

  clearSearchQuery() {
    this.searchQuery = '';
    this.searchResultsVisible = false; // Скрываем результаты поиска
  }

  getSearchResultsVisibility() {
    // Возвращает текущее значение searchResultsVisible.
    return this.searchResultsVisible;
  }
}
