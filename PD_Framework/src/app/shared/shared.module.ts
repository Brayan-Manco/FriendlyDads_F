import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormBComponent } from './components/form-b/form-b.component';
import { FormPComponent } from './components/form-p/form-p.component';
import { FormFComponent } from './components/form-f/form-f.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    FormBComponent,
    FormPComponent,
    FormFComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    FormBComponent,
    FormPComponent,
    FormFComponent,
  ]
})
export class SharedModule { }
