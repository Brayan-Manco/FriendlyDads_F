import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuAdminRoutingModule } from './menu-admin-routing.module';
import { MenuAdminComponent } from './pages/menu-admin/menu-admin.component';


@NgModule({
  declarations: [
    MenuAdminComponent
  ],
  imports: [
    CommonModule,
    MenuAdminRoutingModule
  ]
})
export class MenuAdminModule { }
