import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MultiGridComponent } from './multi-grid.component';

@NgModule({
  imports: [MatGridListModule, CommonModule, MatCardModule],
  declarations: [MultiGridComponent],
  providers: [],
  exports: [MultiGridComponent]
})
export class MultiGridComponentModule {
}
