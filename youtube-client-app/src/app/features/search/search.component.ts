import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
})
export class SearchComponent {
  @Input() visible: boolean = false;

  @Output() sortRequested = new EventEmitter<{
    field: 'date' | 'count';
    order: 'asc' | 'desc';
  }>();

  @Output() filterQueryChange = new EventEmitter<string>();

  handleSortChange(sortData: {
    field: 'date' | 'count';
    order: 'asc' | 'desc';
  }) {
    this.sortRequested.emit(sortData);
  }

  handleFilterEvent(query: string) {
    this.filterQueryChange.emit(query);
  }
}
