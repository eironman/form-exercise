import {createFeatureSelector, createSelector} from '@ngrx/store';
import {enterReducerKey, EnterState} from "../reducers/enter.reducer";

const getEnterState = createFeatureSelector<EnterState>(enterReducerKey);

export const getEnterForm = createSelector(getEnterState, (state: EnterState) =>  state.form);
