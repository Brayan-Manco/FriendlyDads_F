import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormArchRoutingModule } from './form-arch-routing.module';
import { FormArchComponent } from './pages/form-arch/form-arch.component';


@NgModule({
  declarations: [
    FormArchComponent
  ],
  imports: [
    CommonModule,
    FormArchRoutingModule
  ]
})
export class FormArchModule { }
