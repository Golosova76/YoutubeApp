import { Component, ViewChild } from '@angular/core';
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
import { InputComponent } from 'app/shared/input/input.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm!: FormGroup;

  isLoggedIn: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordStrengthValidator]],
    });

    this.subscription.add(
      this.loginService.isLoggedIn$.subscribe((status) => {
        this.isLoggedIn = status;
      }),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /\d/.test(value);
    const hasSpecialChar = /[!@#?\]]/.test(value);
    const hasMinLength = value.length >= 8;

    const passwordValid =
      hasUpperCase &&
      hasLowerCase &&
      hasNumeric &&
      hasSpecialChar &&
      hasMinLength;

    return !passwordValid ? { passwordStrength: true } : null;
  }

  onLogin() {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Form values:', username, password); // Логирование значений формы
      if (this.loginService.login(username, password)) {
        this.router.navigate(['youtube']);
      } else {
        alert('Login failed!');
      }
    } else {
      this.loginForm.markAllAsTouched(); // Отметить все поля формы как "затронутые", чтобы показать ошибки
      console.log('Form is invalid');
    }
  }

  onLogout() {
    this.loginService.logout();
  }
}
