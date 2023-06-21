import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeFileComponent } from './pages/see-file/see-file.component';

const routes: Routes = [
  {
    path:'',
    component: SeeFileComponent,
    outlet:'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeeFileRoutingModule { }
