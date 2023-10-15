import {createReducer, on} from '@ngrx/store';
import * as EnterActions from '../actions/enter.actions';
import {EnterFormRawModel} from "../../core/models/enter-form-raw.model";

export const enterReducerKey = 'enter';

export interface EnterState {
  form: EnterFormRawModel | null;
}

export const initialState: EnterState = {
  form: null
};

export const enterReducer = createReducer(
  initialState,
  on(EnterActions.saveEnterForm, (state, { form }) => ({ ...state, form }))
);
