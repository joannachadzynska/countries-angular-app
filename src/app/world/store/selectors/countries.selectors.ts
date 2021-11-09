import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Country } from './../../../country';

export interface CountriesState {
  countries: {
    allCountries: Country[];
  };
}
export interface AppState {
  world: CountriesState;
}

const selectRouterState = createFeatureSelector<RouterReducerState>('router');
const { selectRouteParams } = getSelectors(selectRouterState);

export const selectAllCountries = (state: AppState) =>
  state.world.countries.allCountries;

export const selectCountriesByName = (name: string) =>
  createSelector(selectAllCountries, (countries) => {
    console.log(countries.find((item) => item.cioc === name));

    if (countries) {
      return countries.find((item) => item.cioc === name);
    } else {
      return [];
    }
  });
