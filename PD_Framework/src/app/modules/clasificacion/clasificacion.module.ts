import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasificacionRoutingModule } from './clasificacion-routing.module';
import { ClasiComponent } from './pages/clasi/clasi.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClasiComponent
  ],
  imports: [
    CommonModule,
    ClasificacionRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClasificacionModule { }
