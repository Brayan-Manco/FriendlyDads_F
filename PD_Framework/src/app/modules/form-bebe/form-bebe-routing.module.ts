import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBebeComponent } from './pages/form-bebe/form-bebe.component';

const routes: Routes = [
  {
    path: '',
    component: FormBebeComponent,
    outlet: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBebeRoutingModule { }
