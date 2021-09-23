import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../country';
import { RegionsService } from '../regions.service';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.scss'],
})
export class RegionDetailsComponent implements OnInit {
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
