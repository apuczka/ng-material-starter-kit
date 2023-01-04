import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MultiTableComponent } from './multi-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [MultiTableComponent],
  providers: [],
  exports: [MultiTableComponent]
})
export class MultiTableComponentModule {
}
