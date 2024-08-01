import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'app/auth/services/login.service';
import { InputComponent } from 'app/shared/input/input.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild('usernameInput', { static: false }) usernameInput!: InputComponent;
  @ViewChild('passwordInput', { static: false }) passwordInput!: InputComponent;

  isLoggedIn: boolean = false;

  private unsubscribe$ = new Subject<void>(); // для кправления отпиской

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loginService.isLoggedIn$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((status) => {
        this.isLoggedIn = status;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLogin() {
    if (this.usernameInput && this.passwordInput) {
      const username = this.usernameInput.value;
      const password = this.passwordInput.value;

      if (username && password && this.loginService.login(username, password)) {
        this.router.navigate(['youtube']);
      } else {
        alert('Login failed!');
      }
    } else {
      console.error('Input components are not initialized!');
    }
  }

  onLogout() {
    this.loginService.logout();
  }
}
