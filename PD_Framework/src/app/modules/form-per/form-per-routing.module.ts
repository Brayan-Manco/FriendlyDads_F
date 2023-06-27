import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPerComponent } from './pages/form-per/form-per.component';

const routes: Routes = [
  {
    path: '',
    component: FormPerComponent,
    outlet: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormPerRoutingModule { }
