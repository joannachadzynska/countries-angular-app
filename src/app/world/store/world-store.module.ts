import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effects } from './effects';
import { reducers, worldFeatureKey } from './reducers';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(worldFeatureKey, reducers),
        EffectsModule.forFeature(effects),
    ],
})
export class WorldStoreModule {}
