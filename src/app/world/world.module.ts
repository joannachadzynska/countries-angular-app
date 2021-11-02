import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './../shared/shared.module';
import { CountryComponent } from './country/country.component';
import { RegionComponent } from './region/region.component';
import { RegionsComponent } from './regions/regions.component';
import { CountriesEffects } from './store/countries.effects';
import { WorldStoreModule } from './store/world-store.module';
import { WorldRoutingModule } from './world-routing.module';

@NgModule({
  declarations: [RegionsComponent, RegionComponent, CountryComponent],
  imports: [
    CommonModule,
    WorldStoreModule,
    WorldRoutingModule,
    SharedModule,
    EffectsModule.forFeature([CountriesEffects]),
    // StoreModule.forFeature(worldFeatureKey, reducers),
  ],
  exports: [RegionsComponent, CountryComponent],
})
export class WorldModule {}
