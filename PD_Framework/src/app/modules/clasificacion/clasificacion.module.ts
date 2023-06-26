import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasificacionRoutingModule } from './clasificacion-routing.module';
import { ClasiComponent } from './pages/clasi/clasi.component';


@NgModule({
  declarations: [
    ClasiComponent
  ],
  imports: [
    CommonModule,
    ClasificacionRoutingModule
  ]
})
export class ClasificacionModule { }
