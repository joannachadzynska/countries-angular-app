import { createAction, props } from '@ngrx/store';
import { Country } from './../../../country';

export const loadCountries = createAction('[World Page] Load All Countries');
export const getAllCountriesSuccess = createAction(
  '[World Page] All Countries',
  props<{ countries: Country[] }>()
);
