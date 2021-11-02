import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '@environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, worldFeatureKey } from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(worldFeatureKey, reducers),
    environment.reduxDevtools ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class WorldStoreModule {}
