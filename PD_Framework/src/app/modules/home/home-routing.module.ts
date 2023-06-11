import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
    path:'profile',
    loadChildren: ()=>import('../profile/profile.module').then(m =>m.ProfileModule)
  },
  {
    path:'search',
    loadChildren: ()=>import('../search/search.module').then(m =>m.SearchModule)
  },
  {
    path:'login',
    loadChildren: ()=>import('../login/login.module').then(m =>m.LoginModule)
  },
  {
    path:'sing-in',
    loadChildren: ()=>import('../sing-in/sing-in.module').then(m =>m.SingInModule)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
