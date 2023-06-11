import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingInRoutingModule } from './sing-in-routing.module';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SingInComponent
  ],
  imports: [
    CommonModule,
    SingInRoutingModule,
    FormsModule
  ]
})
export class SingInModule { }
