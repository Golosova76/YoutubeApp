import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  login(username: string, password: string): boolean {
    localStorage.setItem('authToken', 'fake-token'); // Сохраняем фиктивный токен
    return true;
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }
}
