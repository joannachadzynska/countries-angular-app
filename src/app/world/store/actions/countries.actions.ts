import { createAction, props } from '@ngrx/store';
import { Country } from './../../../country';

export const getAll = createAction(
  '[World Page] All Countries',
  props<{ countries: Country[] }>()
);
