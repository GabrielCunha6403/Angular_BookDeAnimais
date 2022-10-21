import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function confirmPassword(formGroup: FormGroup): ValidationErrors | null {
  let password = formGroup.get('password')?.value ?? '';
  let confirmPassword = formGroup.get('confirmPassword')?.value ?? '';
  if (password !== confirmPassword) return { notEquals: true };
  else return null;
}
