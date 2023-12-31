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
    path:'menu-admin/:id',
    loadChildren: ()=>import('../menu-admin/menu-admin.module').then(m =>m.MenuAdminModule)
  },
  {
    path:'menu',
    loadChildren: ()=>import('../menu/menu.module').then(m =>m.MenuModule)
  },
  {
    path:'search/:id',
    loadChildren: ()=>import('../search/search.module').then(m =>m.SearchModule)
  },
  {
    path: 'info/:id',
    loadChildren: ()=>import('../info/info.module').then(m =>m.InfoModule)
  },
 {
    path:'perfil/:id',
    loadChildren: ()=>import('../perfil/perfil.module').then(m =>m.PerfilModule)
  },
  //formularios
  {
    path:'clasificacion/:id_cuenta',
    loadChildren: ()=>import('../clasificacion/clasificacion.module').then(m =>m.ClasificacionModule)
  },

     //crear 
  {
    path:'form-arch-create/:id_cuenta',
    loadChildren: ()=>import('../form-arch/form-arch.module').then(m =>m.FormArchModule)
  },

     //editar con el componente de form-arch

  {
    path:'form-bebe-create/:id',
    loadChildren: ()=>import('../form-bebe/form-bebe.module').then(m =>m.FormBebeModule)
  },
    //editar con el componente de form-bebe
  {
    path: 'form-per/user-update/:id_user',
    loadChildren: ()=>import('../form-per/form-per.module').then(m =>m.FormPerModule)
  },

  {
    path: 'form-per/cuenta/:id_cuenta',
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
