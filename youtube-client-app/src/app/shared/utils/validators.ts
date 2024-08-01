import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordStrengthValidator(
  control: AbstractControl,
): ValidationErrors | null {
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

export function futureDateValidator(
  control: AbstractControl,
): ValidationErrors | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const inputDate = new Date(control.value);
  return inputDate > today ? { futureDate: true } : null;
}
