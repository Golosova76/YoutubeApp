import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from 'app/auth/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['youtube']);
      return false;
    }
    return true;
  }
}
