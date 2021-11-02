import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RegionsService } from 'src/app/regions.service';
import { getAll } from './actions/countries.actions';

@Injectable()
export class CountriesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAll),
      mergeMap(() =>
        this.regionsService.getCountries().pipe(
          map((countries) => getAll({ countries })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private regionsService: RegionsService
  ) {}
}
