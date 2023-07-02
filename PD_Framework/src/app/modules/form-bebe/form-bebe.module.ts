import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBebeRoutingModule } from './form-bebe-routing.module';
import { FormBebeComponent } from './pages/form-bebe/form-bebe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormBebeComponent
  ],
  imports: [
    CommonModule,
    FormBebeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FormBebeModule { }
