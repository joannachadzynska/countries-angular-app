import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CountryResolver } from './world/country.resolver';
import { CountryComponent } from './world/country/country.component';
import { RegionComponent } from './world/region/region.component';
import { RegionsComponent } from './world/regions/regions.component';

const routes: Routes = [
  { path: 'region', component: RegionsComponent },
  { path: '', redirectTo: 'region', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'region/:name', component: RegionComponent },
  {
    path: 'region/:name/:country',
    component: CountryComponent,
    resolve: { country: CountryResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CountryResolver],
})
export class AppRoutingModule {}
