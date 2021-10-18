import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CountryComponent } from './country/country.component';
import { RegionComponent } from './regions/region/region.component';
import { RegionsComponent } from './regions/regions.component';
import { WorldRoutingModule } from './world-routing.module';

@NgModule({
  declarations: [RegionsComponent, RegionComponent, CountryComponent],
  imports: [CommonModule, WorldRoutingModule, SharedModule],
  exports: [RegionsComponent, CountryComponent],
})
export class WorldModule {}
