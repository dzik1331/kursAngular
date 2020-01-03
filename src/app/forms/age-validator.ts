import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class AgeValidator {

  static has18(control: AbstractControl): ValidationErrors | null {
    if (control && control.value !== null) {
      return new Date().getFullYear() - control.value < 18 ? {ageError: true} : null;
    }
    return null;
  }
}
