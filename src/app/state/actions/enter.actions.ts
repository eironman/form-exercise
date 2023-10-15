import {createAction, props} from '@ngrx/store';
import {EnterFormRawModel} from "../../core/models/enter-form-raw.model";

export const saveEnterForm = createAction(
  '[Enter] Save Enter Form',
  props<{form: EnterFormRawModel}>()
);
