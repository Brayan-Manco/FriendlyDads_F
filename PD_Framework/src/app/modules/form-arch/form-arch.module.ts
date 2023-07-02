import { NgModule } from '@angular/core';

import { FormArchRoutingModule } from './form-arch-routing.module';
import { FormArchComponent } from './pages/form-arch/form-arch.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormArchComponent
  ],
  imports: [
    FormArchRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ]
})
export class FormArchModule { }
