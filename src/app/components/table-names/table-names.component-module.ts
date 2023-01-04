import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TableNamesComponent } from './table-names.component';

@NgModule({
  imports: [MatTableModule, MatTabsModule],
  declarations: [TableNamesComponent],
  providers: [],
  exports: [TableNamesComponent]
})
export class TableNamesComponentModule {
}
