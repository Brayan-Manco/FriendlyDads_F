import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuAdminRoutingModule } from './menu-admin-routing.module';
import { MenuAdminComponent } from './pages/menu-admin/menu-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MenuAdminComponent
  ],
  imports: [
    CommonModule,
    MenuAdminRoutingModule,
    SharedModule
  ]
})
export class MenuAdminModule { }
