import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
}
