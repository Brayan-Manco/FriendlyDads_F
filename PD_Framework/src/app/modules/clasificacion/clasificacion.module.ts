import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasificacionRoutingModule } from './clasificacion-routing.module';
import { ClasiComponent } from './pages/clasi/clasi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ClasiComponent
  ],
  imports: [
    CommonModule,
    ClasificacionRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ClasificacionModule { }
