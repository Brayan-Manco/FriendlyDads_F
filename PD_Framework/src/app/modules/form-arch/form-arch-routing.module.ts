import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArchComponent } from './pages/form-arch/form-arch.component';

const routes: Routes = [
  {
    path: '',
    component: FormArchComponent,
    outlet: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormArchRoutingModule { }
