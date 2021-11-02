import { ActionReducerMap } from '@ngrx/store';
import { countriesFeatureKey, countriesReducer } from './countries.reducer';

export const worldFeatureKey = 'world';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  [countriesFeatureKey]: countriesReducer,
};
