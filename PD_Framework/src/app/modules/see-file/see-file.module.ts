import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeeFileRoutingModule } from './see-file-routing.module';
import { SeeFileComponent } from './pages/see-file/see-file.component';


@NgModule({
  declarations: [
    SeeFileComponent
  ],
  imports: [
    CommonModule,
    SeeFileRoutingModule
  ]
})
export class SeeFileModule { }
