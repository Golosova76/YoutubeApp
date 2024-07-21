import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  private sortField: 'date' | 'count' = 'date';
  private sortOrder: 'asc' | 'desc' = 'asc';
  private sortPanelVisible: boolean = false;
  private searchQueryWords: string = '';

  // Геттер для поля сортировки
  getsortField(): 'date' | 'count' {
    return this.sortField;
  }

  // Сеттер для поля сортировки
  setsortField(value: 'date' | 'count') {
    if (this.sortField === value) {
      // Переключаем порядок сортировки, если поле не меняется
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // Устанавливаем новое поле сортировки и обновляем порядок
      this.sortField = value;
      this.updateSortOrder();
    }
  }

  // Геттер для порядка сортировки
  getsortOrder(): 'asc' | 'desc' {
    return this.sortOrder;
  }

  // Сеттер для порядка сортировки
  setsortOrder(value: 'asc' | 'desc') {
    this.sortOrder = value;
  }

  // Геттер для видимости панели сортировки
  getsortPanelVisible(): boolean {
    // Возвращает текущее значение sortPanelVisible.
    return this.sortPanelVisible;
  }

  // Сеттер для видимости панели сортировки
  setsortPanelVisible(visible: boolean) {
    this.sortPanelVisible = visible;
  }

  // Метод просто переключать состояние видимости на противоположное
  toggleSortPanelVisibility() {
    this.sortPanelVisible = !this.sortPanelVisible;
    console.log(`Toggled sortPanelVisible to: ${this.sortPanelVisible}`);
  }

  // Метод для обновления порядка сортировки
  private updateSortOrder() {
    this.sortOrder = this.sortField === 'date' ? 'asc' : 'desc';
  }

  // Геттер для поискового запроса
  getSearchQuery(): string {
    return this.searchQueryWords;
  }

  // Сеттер для поискового запроса
  setSearchQuery(query: string) {
    this.searchQueryWords = query;
  }
}
