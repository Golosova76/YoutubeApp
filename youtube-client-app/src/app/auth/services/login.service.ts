import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.isLoggedIn(),
  );

  login(username: string, password: string): boolean {
    localStorage.setItem('authToken', 'fake-token'); // Сохраняем фиктивный токен
    this.loggedIn.next(true);
    return true;
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.loggedIn.next(false);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
