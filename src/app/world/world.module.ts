import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegionsComponent } from './regions/regions.component';
import { WorldRoutingModule } from './world-routing.module';

@NgModule({
  declarations: [RegionsComponent],
  imports: [CommonModule, WorldRoutingModule],
  exports: [RegionsComponent],
})
export class WorldModule {}
