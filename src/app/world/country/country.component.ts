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
  country!: Country;
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
    this.route.data.subscribe((data) => {
      console.log(data.country[0]);
      this.country = data.country[0];
    });
  }

  getCountry(): void {
    const name = this.route.snapshot.paramMap.get('country')!;
    // this.regionService.getCountryByName(name).subscribe((country) => {
    //   this.country = country[0];
    //   // console.log(this.country);
    // });
  }

  goBack(): void {
    this.location.back();
  }
}
