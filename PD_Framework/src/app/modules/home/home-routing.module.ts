import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    path:'clasificacion',
    loadChildren: ()=>import('../clasificacion/clasificacion.module').then(m =>m.ClasificacionModule)
  },
  {
    path:'form-arch',
    loadChildren: ()=>import('../form-arch/form-arch.module').then(m =>m.FormArchModule)
  },
  {
    path:'form-bebe',
    loadChildren: ()=>import('../form-bebe/form-bebe.module').then(m =>m.FormBebeModule)
  },
  {
    path:'form-per',
    loadChildren: ()=>import('../form-per/form-per.module').then(m =>m.FormPerModule)
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
