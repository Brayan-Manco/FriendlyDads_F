import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPerRoutingModule } from './form-per-routing.module';
import { FormPerComponent } from './pages/form-per/form-per.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormPerComponent
  ],
  imports: [
    CommonModule,
    FormPerRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FormPerModule { }
