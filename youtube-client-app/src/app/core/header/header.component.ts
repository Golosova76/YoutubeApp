import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { filter, takeUntil } from 'rxjs/operators';

import { InputComponent } from 'app/shared/input/input.component';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import { SearchService } from 'app/youtube/services/search.service';
import { LoginService } from 'app/auth/services/login.service';
import { NavigationEnd, Router } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Subject } from 'rxjs';

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

  public sortPanelVisible: boolean = false;

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
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.updateLogoutButtonVisibility();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearch(): void {
    const searchValue = this.searchInput.value;
    if (searchValue.trim().length > 0) {
      this.searchService.setSearchQuery(searchValue);
      this.router.navigate(['youtube', 'search-results'], {
        queryParams: { search: searchValue },
      });
    } else {
      this.searchService.clearSearchQuery();
      this.router.navigate(['youtube', 'search-results']); // Возврат на главную страницу
    }
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

  logout() {
    this.loginService.logout();
    this.updateLogoutButtonVisibility();
    this.router.navigate(['auth']);
  }

  updateLogoutButtonVisibility() {
    this.showLogoutButton = this.loginService.isLoggedIn();
  }
}
