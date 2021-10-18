import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';

@NgModule({
  declarations: [CapitalizeFirstLetterPipe],
  imports: [CommonModule],
  exports: [CapitalizeFirstLetterPipe],
})
export class SharedModule {}
