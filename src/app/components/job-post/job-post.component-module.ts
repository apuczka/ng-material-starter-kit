import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { JobPostComponent } from './job-post.component';

@NgModule({
  imports: [MatButtonToggleModule, MatExpansionModule, CommonModule, MatGridListModule, MatStepperModule, MatButtonModule, MatTableModule],
  declarations: [JobPostComponent],
  providers: [],
  exports: [JobPostComponent]
})
export class JobPostComponentModule {
}
