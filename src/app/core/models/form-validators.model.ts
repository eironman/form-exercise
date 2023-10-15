import {ValidatorFn} from "@angular/forms";

export interface FormValidatorsModel {
  controls: { [key: string]: ValidatorFn[] };
  form: ValidatorFn[];
}
