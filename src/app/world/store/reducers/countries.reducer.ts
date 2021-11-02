import { createReducer, on } from '@ngrx/store';
import { getAll } from '../actions/countries.actions';
import { Country } from './../../../country';
export const countriesFeatureKey = 'countries';

export const initialState: Country[] = [];

const _countriesReducer = createReducer(
  initialState,
  on(getAll, (state, action) => {
    console.log(action);

    return state;
  })
);

export function countriesReducer(state: any, action: any) {
  return _countriesReducer(state, action);
}
