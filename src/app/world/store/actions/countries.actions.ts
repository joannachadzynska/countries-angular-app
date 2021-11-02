import { createAction, props } from '@ngrx/store';
import { Country } from './../../../country';

export const loadCountries = createAction('[World Page] Fetch Countries');
export const loadCountriesFailure = createAction(
    '[World Page] Fetch Countries Failure',
    props<{ message: any }>()
);
export const loadCountriesSuccess = createAction(
    '[World Page] Fetch Countries Success',
    props<{ countries: Country[] }>()
);
