import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  takeUntil,
} from 'rxjs/operators';

import { InputComponent } from 'app/shared/input/input.component';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import { SearchService } from 'app/youtube/services/search.service';
import { LoginService } from 'app/auth/services/login.service';
import { NavigationEnd, Router } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Subject } from 'rxjs';
import { DEBOUNCE_TIME_MS } from 'app/shared/utils/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    CustomButtonComponent,
    FormsModule,
    SearchBarComponent,
  ],
})
export class HeaderComponent {
  @ViewChild('searchInput', { static: true }) searchInput!: InputComponent;

  showLogoutButton: boolean = false;

  showLoginButton: boolean = true;

  showCreateCardButton: boolean = false;

  showFavoriteButton: boolean = false;

  public sortPanelVisible: boolean = false;
  isFavoritePage: boolean = false; // Переменная для отслеживания страницы "Избранное"

  searchControl = new FormControl('');

  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private searchService: SearchService,
    private loginService: LoginService,
  ) {}

  ngOnInit() {
    this.updateLogoutButtonVisibility();
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        takeUntil(this.destroy$),
      )
      .subscribe((event: NavigationEnd) => {
        this.updateLogoutButtonVisibility();
        this.isFavoritePage = event.urlAfterRedirects.includes('favorite'); // Отслеживаем, находимся ли на странице "Избранное"
      });
    // Подписка на изменения значения поиска через EventEmitter
    this.searchInput.valueChange
      .pipe(
        debounceTime(DEBOUNCE_TIME_MS),
        distinctUntilChanged(),
        filter((query) => query.length >= 3 || query.length === 0),
        takeUntil(this.destroy$),
      )
      .subscribe((query) => {
        if (query.length >= 3) {
          this.searchService.setSearchQuery(query);
          this.router.navigate(['youtube', 'search-results'], {
            queryParams: { search: query },
          });
        } else {
          this.searchService.clearSearchQuery();
          this.router.navigate(['youtube', 'search-results']);
        }
      });
    // подписка на события входа
    this.loginService.isLoggedIn$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isLoggedIn) => {
        this.showLogoutButton = isLoggedIn;
        this.showCreateCardButton = isLoggedIn;
        this.showFavoriteButton = isLoggedIn;
      });
  }
  onSearchInputChange(query: string): void {
    this.searchService.setSearchQuery(query);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // кнопка настроек поиска
  handleButtonClick() {
    this.settingsSearch();
  }

  // появление панели при клике на кнопку
  settingsSearch() {
    this.sortPanelVisible = !this.sortPanelVisible;
  }

  navigateToLogin() {
    this.router.navigate(['auth']);
  }

  navigateTofavorite() {
    this.router.navigate(['youtube', 'favorite']);
  }

  logout() {
    this.loginService.logout();
    this.updateLogoutButtonVisibility();
    this.router.navigate(['auth']);
  }

  updateLogoutButtonVisibility() {
    const isLoggedIn = this.loginService.isLoggedIn();
    this.showLogoutButton = isLoggedIn;
    this.showLoginButton = !isLoggedIn;
    this.showFavoriteButton = isLoggedIn;
  }

  createCard() {
    this.router.navigate(['admin']);
  }
}
