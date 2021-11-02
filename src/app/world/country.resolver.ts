import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from './../country';
import { RegionsService } from './../regions.service';

@Injectable({
  providedIn: 'root',
})
export class CountryResolver implements Resolve<Country[]> {
  constructor(private regionsService: RegionsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Country[]> {
    console.log(route.params.country);

    return this.regionsService.getCountryByName(route.params.country);
  }
}
