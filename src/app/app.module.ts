import { HttpClientModule } from '@angular/common/http';
import '@angular/common/locales/global/pl';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { THEME_CONFIG } from '@bcodes/ngx-theme-service';
import { environment } from '@environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { COMMON_CONSTANTS } from './shared/common.constants';
import { UiModule } from './ui/ui.module';
import { WorldModule } from './world/world.module';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WorldModule,
    UiModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.reduxDevtools ? StoreDevtoolsModule.instrument() : [],
  ],

  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' },
    {
      provide: THEME_CONFIG,
      useValue: COMMON_CONSTANTS.themeServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
