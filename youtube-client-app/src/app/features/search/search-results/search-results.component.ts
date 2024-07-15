import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchItemComponent } from './search-item/search-item.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [CommonModule, SearchItemComponent],
})
export class SearchResultsComponent {}
