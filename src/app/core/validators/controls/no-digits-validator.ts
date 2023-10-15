import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function noDigitsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    return !value || /^[^\d]+$/m.test(value) ? null : {'no-digits': true};
  };
}
