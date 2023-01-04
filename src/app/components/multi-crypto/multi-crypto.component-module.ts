import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MultiCryptoComponent } from './multi-crypto.component';

@NgModule({
  imports: [MatTableModule, CommonModule],
  declarations: [MultiCryptoComponent],
  providers: [],
  exports: [MultiCryptoComponent]
})
export class MultiCryptoComponentModule {
}
