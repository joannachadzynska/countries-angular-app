import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from './country';
import { Region } from './region';

@Injectable({
  providedIn: 'root',
})
export class RegionsService {
  private regionsUrl = 'https://restcountries.com/v3/region';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getRegionByName(name: string): Observable<Country[]> {
    const url = `${this.regionsUrl}/${name}`;
    return this.http.get<Region>(url).pipe(
      tap((_: any) => this.log(`fetched region name=${name}`)),
      catchError(this.handleError<Country[]>(`get region by name name=${name}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
}
