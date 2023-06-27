import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasiComponent } from './pages/clasi/clasi.component';

const routes: Routes = [
  {
    path: '',
    component: ClasiComponent,
    outlet: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasificacionRoutingModule { }
