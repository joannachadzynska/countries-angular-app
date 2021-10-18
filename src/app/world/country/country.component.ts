import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/country';
import { RegionsService } from 'src/app/regions.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  country: Country | undefined;
  countryName: string = '';

  constructor(
    private route: ActivatedRoute,
    private regionService: RegionsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCountry();
    const name = this.route.snapshot.paramMap.get('country')!;
    this.countryName = name;
  }

  getCountry(): void {
    const name = this.route.snapshot.paramMap.get('country')!;
    this.regionService
      .getCountryByName(name)
      .subscribe((country) => (this.country = country[0]));
  }

  goBack(): void {
    this.location.back();
  }
}
