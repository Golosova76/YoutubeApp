import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SearchItemComponent } from '../../components/search-item/search-item.component';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule, SearchItemComponent],
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {}
