import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RegionsService } from 'src/app/regions.service';
import { CountriesActions } from './actions';

@Injectable()
export class CountriesEffects {
  constructor(
    private actions$: Actions,
    private regionsService: RegionsService
  ) {}

  public fetchCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountriesActions.loadCountries),
      switchMap(() =>
        this.regionsService.getCountries().pipe(
          map((countries) =>
            CountriesActions.loadCountriesSuccess({ countries })
          ),
          catchError((error: any) =>
            of(CountriesActions.loadCountriesFailure(error))
          )
        )
      )
    )
  );
}
