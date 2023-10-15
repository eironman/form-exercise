import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FormValidatorsModel} from "../models/form-validators.model";

@Injectable()
export class FormValidatorService {
  setValidators(form: FormGroup, validators: FormValidatorsModel): void {
    if (validators.controls) {
      Object.keys(validators.controls).forEach((formControlName: string) => {
        const formControl = form.get(formControlName);
        if (formControl) {
          formControl.clearValidators();
          formControl.setValidators(validators.controls[formControlName]);
          formControl.updateValueAndValidity();
        }
      });
    }
    if (validators.form) {
      form.clearValidators();
      form.setValidators(validators.form);
      form.updateValueAndValidity();
    }
  }
}
