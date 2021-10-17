import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionDetailsComponent } from './region-details/region-details.component';
import { UiModule } from './ui/ui.module';
import { WorldModule } from './world/world.module';

@NgModule({
  declarations: [AppComponent, AboutComponent, RegionDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WorldModule,
    UiModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
