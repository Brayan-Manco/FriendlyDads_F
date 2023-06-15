import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },  
  {
    path:'auth',
    loadChildren: ()=>import('../auth/auth.module').then(m =>m.AuthModule)
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
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
