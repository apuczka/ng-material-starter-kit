import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CryptoComponent } from './crypto.component';

@NgModule({
  imports: [MatChipsModule, CommonModule, MatProgressBarModule],
  declarations: [CryptoComponent],
  providers: [],
  exports: [CryptoComponent]
})
export class CryptoComponentModule {
}
