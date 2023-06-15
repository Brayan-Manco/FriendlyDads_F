import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './pages/auth/auth.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AuthModule { }
