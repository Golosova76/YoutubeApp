import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { SearchComponent } from './features/search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SearchComponent],
})
export class AppComponent {
  title = 'youtube-client-app';

  searchBarVisible: boolean = false;

  handleToggleSearch() {
    this.searchBarVisible = !this.searchBarVisible; // Переключаем видимость по событию
  }
}
