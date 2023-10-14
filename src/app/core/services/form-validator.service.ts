import {Injectable} from "@angular/core";
import {FormGroup, ValidatorFn} from "@angular/forms";

@Injectable()
export class FormValidatorService {
  setValidators(form: FormGroup, validators: { [key: string]: ValidatorFn[] }): void {
    Object.keys(validators).forEach((formControlName: string) => {
      const formControl = form.get(formControlName);
      if (formControl) {
        formControl.clearValidators();
        formControl.setValidators(validators[formControlName]);
        formControl.updateValueAndValidity();
      }
    });
  }
}
