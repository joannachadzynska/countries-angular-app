import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { RegionsService } from 'src/app/regions.service';
import { Country } from './../../country';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  region: Country[] | undefined;
  regionName: string = '';

  constructor(
    private route: ActivatedRoute,
    private regionService: RegionsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRegion();
    const name = this.route.snapshot.paramMap.get('name')!;
    this.regionName = name;
  }

  getRegion(): void {
    const name = this.route.snapshot.paramMap.get('name')!;
    this.regionService
      .getRegionByName(name)
      .subscribe((region) => (this.region = region));
  }

  goBack(): void {
    this.location.back();
  }
}
