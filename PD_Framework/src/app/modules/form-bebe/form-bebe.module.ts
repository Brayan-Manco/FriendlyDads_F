import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBebeRoutingModule } from './form-bebe-routing.module';
import { FormBebeComponent } from './pages/form-bebe/form-bebe.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormBebeComponent
  ],
  imports: [
    CommonModule,
    FormBebeRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormBebeModule { }
