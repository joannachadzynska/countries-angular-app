import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Country } from 'src/app/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  country!: Country;
  countryName: string = '';
  borders$!: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('country')!;
    this.countryName = name;
    this.route.data.subscribe((data) => {
      this.country = data.country.find(
        (country: { name: { common: string } }) =>
          country.name.common.toLowerCase() === this.countryName
      );
    });

    // this.country?.borders?.forEach((border) => {
    //   this.borders$ = this.store
    //     .select(countriesSelectors.selectCountriesByCioc(border))
    //     .pipe(
    //       tap((border) => {
    //         console.log(border);
    //       })
    //     );
    // });
  }

  goBack(): void {
    this.location.back();
  }
}
