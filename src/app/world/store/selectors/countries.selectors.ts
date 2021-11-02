import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Country } from './../../../country';

export interface AppState {
    allCountries: Country[];
}

const selectRouterState = createFeatureSelector<RouterReducerState>('router');
const { selectRouteParams } = getSelectors(selectRouterState);

export const selectAllCountries = (state: AppState) => state.allCountries;

export const selectCountriesByCioc = (id: string) =>
    createSelector(selectAllCountries, (allCountries: Country[]) =>
        allCountries.filter((country) => country.cioc === id)
    );
