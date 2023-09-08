import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkHoursComponent } from './work-hours/work-hours.component';





@NgModule({
  declarations: [
    WorkHoursComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    WorkHoursComponent
  ]
})
export class SharedModule { }
