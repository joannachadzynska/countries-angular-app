import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RegionsService } from 'src/app/regions.service';
import { CountriesActions } from './actions';

@Injectable()
export class CountriesEffects {
  loadMovies$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CountriesActions.getAllCountriesSuccess),
        mergeMap(() =>
          this.regionsService.getCountries().pipe(
            map((countries) =>
              CountriesActions.getAllCountriesSuccess({ countries })
            ),
            catchError(() => EMPTY)
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private regionsService: RegionsService
  ) {}
}
