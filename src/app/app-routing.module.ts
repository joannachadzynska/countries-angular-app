import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RegionDetailsComponent } from './region-details/region-details.component';
import { RegionsComponent } from './world/regions/regions.component';

const routes: Routes = [
  { path: '', component: RegionsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'region/:name', component: RegionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
