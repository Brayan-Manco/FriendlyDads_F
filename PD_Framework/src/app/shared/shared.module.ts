import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormBComponent } from './components/form-b/form-b.component';
import { FormPComponent } from './components/form-p/form-p.component';
import { FormFComponent } from './components/form-f/form-f.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    FormBComponent,
    FormPComponent,
    FormFComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    FormBComponent,
    FormPComponent,
    FormFComponent,
    LoginComponent,
    SignUpComponent
  ]
})
export class SharedModule { }
