import { createReducer, on } from '@ngrx/store';
import { CountriesActions } from '../actions';
import { Country } from './../../../country';

export const countriesFeatureKey = 'countries';

export interface State {
    allCountries: Country[];
    loading: boolean;
    error: any;
}

export const initialState: State = {
    allCountries: [],
    loading: true,
    error: null,
};

const _countriesReducer = createReducer(
    initialState,
    on(CountriesActions.loadCountries, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(CountriesActions.loadCountriesSuccess, (state, action) => ({
        ...state,
        loading: false,
        allCountries: action.countries,
        error: null,
    })),
    on(CountriesActions.loadCountriesFailure, (state, action) => ({
        ...state,
        loading: false,
        allCountries: [],
        error: action.message,
    }))
);

export function countriesReducer(state: any, action: any) {
    return _countriesReducer(state, action);
}
