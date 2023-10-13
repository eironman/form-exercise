import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {EnterFormModel} from "../../../../core/models/enter-form.model";

export function validateEnterForm(): ValidatorFn {
  return (enterForm: AbstractControl<EnterFormModel>): ValidationErrors | null => {
    const errors: ValidationErrors = {};
    if (!enterForm.value.name) {
      errors['emptyName'] = true;
    }
    return Object.keys(errors).length > 0 ? errors : null;
  };
}
