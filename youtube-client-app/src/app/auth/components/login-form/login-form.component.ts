import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

import { LoginService } from 'app/auth/services/login.service';
import { Subject, takeUntil } from 'rxjs';
import { passwordStrengthValidator } from 'app/shared/utils/validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm!: FormGroup;

  isLoggedIn: boolean = false;

  private unsubscribe$ = new Subject<void>(); // для кправления отпиской

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordStrengthValidator]],
    });

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
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (this.loginService.login(username, password)) {
        this.router.navigate(['youtube']);
      } else {
        alert('Login failed!');
      }
    } else {
      // Отметить все поля формы как "затронутые", чтобы показать ошибки
      this.loginForm.markAllAsTouched();
    }
  }

  onLogout() {
    this.loginService.logout();
  }
}
