import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  private sortField: 'date' | 'count' = 'date';
  private sortOrder: 'asc' | 'desc' = 'asc';
  private searchQueryWords: string = '';

  // Геттер для поля сортировки
  get getSortField(): 'date' | 'count' {
    return this.sortField;
  }

  // Сеттер для поля сортировки
  set setSortField(value: 'date' | 'count') {
    if (this.sortField === value) {
      // Переключаем порядок сортировки, если поле не меняется
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // Устанавливаем новое поле сортировки и обновляем порядок
      this.sortField = value;
      this.sortOrder = 'asc';
    }
  }

  // Геттер для порядка сортировки
  get getSortOrder(): 'asc' | 'desc' {
    return this.sortOrder;
  }

  // Сеттер для порядка сортировки
  set setSortOrder(value: 'asc' | 'desc') {
    this.sortOrder = value;
  }

  // Геттер для поискового запроса
  get getSearchQueryWords(): string {
    return this.searchQueryWords;
  }

  // Сеттер для поискового запроса
  set setSearchQueryWords(query: string) {
    this.searchQueryWords = query;
  }
}
