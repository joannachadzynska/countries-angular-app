import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { AboutModalComponent } from './components/about-modal/about-modal.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    NavigationComponent,
    LogoComponent,
    AboutModalComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],

  exports: [LayoutComponent],
})
export class UiModule {}
