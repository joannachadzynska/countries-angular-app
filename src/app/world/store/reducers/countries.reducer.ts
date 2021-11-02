import { createReducer, on } from '@ngrx/store';
import { CountriesActions } from '../actions';
import { Country } from './../../../country';
export const countriesFeatureKey = 'countries';

export const initialState: Country[] = [];

const _countriesReducer = createReducer(
  initialState,
  on(CountriesActions.loadCountries, (state, action) => [...state]),
  on(CountriesActions.getAllCountriesSuccess, (state, action) => {
    console.log(action.countries);

    return state;
  })
);

export function countriesReducer(state: any, action: any) {
  return _countriesReducer(state, action);
}
