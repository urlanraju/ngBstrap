// src/app/shared/password-match.validator.ts

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Custom validator to check if two password fields in a FormGroup match.
 *
 * @param passwordControlName The name of the password FormControl in the FormGroup.
 * @param confirmPasswordControlName The name of the confirm password FormControl in the FormGroup.
 * @returns A ValidatorFn that returns ValidationErrors if the passwords do not match, otherwise null.
 */
export function passwordMatchValidator(
  passwordControlName: string,
  confirmPasswordControlName: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    // Cast the AbstractControl to FormGroup to access its controls
    const passwordControl = formGroup.get(passwordControlName);
    const confirmPasswordControl = formGroup.get(confirmPasswordControlName);

    // If controls don't exist or are null, return null (no validation performed)
    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    // Clear any previous 'mismatch' error on the confirm password field
    // This is important to ensure the error disappears when the fields match again
    if (confirmPasswordControl.errors && confirmPasswordControl.errors['mismatch']) {
      delete confirmPasswordControl.errors['mismatch'];
      // If no other errors exist after clearing, set errors to null
      if (Object.keys(confirmPasswordControl.errors).length === 0) {
        confirmPasswordControl.setErrors(null);
      }
    }

    // Check if the passwords match
    if (passwordControl.value !== confirmPasswordControl.value) {
      // Set the 'mismatch' error on the confirm password control
      // This is preferred over setting it on the formGroup, as it highlights the specific field
      confirmPasswordControl.setErrors({ ...confirmPasswordControl.errors, mismatch: true });
      return { mismatch: true }; // Also return the error at the FormGroup level
    }

    // If passwords match, return null (validation passed)
    return null;
  };
}