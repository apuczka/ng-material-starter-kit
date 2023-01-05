import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { InfluancersComponent } from './influancers.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatAutocompleteModule, MatOptionModule, MatButtonToggleModule],
  declarations: [InfluancersComponent],
  providers: [],
  exports: [InfluancersComponent]
})
export class InfluancersComponentModule {
}
