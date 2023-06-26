import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBComponent } from 'src/app/shared/components/form-b/form-b.component';
import { FormFComponent } from 'src/app/shared/components/form-f/form-f.component';
import { FormPComponent } from 'src/app/shared/components/form-p/form-p.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path:'inicio',
    loadChildren: ()=>import('../inicio/inicio.module').then(m =>m.InicioModule)
  },  
  {
    path:'auth',
    loadChildren: ()=>import('../auth/auth.module').then(m =>m.AuthModule)
  },
  {
    path: 'sign-up',
    loadChildren: ()=>import('../sign-up/sign-up.module').then(m =>m.SignUpModule)
  },
  {
    path:'menu-admin',
    loadChildren: ()=>import('../menu-admin/menu-admin.module').then(m =>m.MenuAdminModule)
  },
  {
    path:'menu',
    loadChildren: ()=>import('../menu/menu.module').then(m =>m.MenuModule)
  },
  {
    path:'search',
    loadChildren: ()=>import('../search/search.module').then(m =>m.SearchModule)
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  //componentes
  
  { path:'form-f', component:FormFComponent },
  { path:'form-b', component:FormBComponent },
  { path:'form-p', component:FormPComponent },
  // {
  //   path:'clasi',
  //   component:ClasiComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
