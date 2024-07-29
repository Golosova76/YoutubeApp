import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //логика проверки аутентификации?
  const isAuthenticated = localStorage.getItem('authToken') ? true : false;
  return isAuthenticated;
};
