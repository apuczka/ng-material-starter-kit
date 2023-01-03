import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { SingleRadioComponent } from './single-radio.component';

@NgModule({
  imports: [MatRadioModule, CommonModule],
  declarations: [SingleRadioComponent],
  providers: [],
  exports: [SingleRadioComponent]
})
export class SingleRadioComponentModule {
}
