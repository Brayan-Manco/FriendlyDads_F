import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAdminComponent } from './pages/menu-admin/menu-admin.component'
import { FormFComponent } from 'src/app/shared/components/form-f/form-f.component';

const routes: Routes = [
  {
    path: '',
    component: MenuAdminComponent,
    outlet: 'home'
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuAdminRoutingModule { }
