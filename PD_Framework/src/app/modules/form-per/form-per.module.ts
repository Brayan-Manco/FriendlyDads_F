import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPerRoutingModule } from './form-per-routing.module';
import { FormPerComponent } from './pages/form-per/form-per.component';


@NgModule({
  declarations: [
    FormPerComponent
  ],
  imports: [
    CommonModule,
    FormPerRoutingModule
  ]
})
export class FormPerModule { }
