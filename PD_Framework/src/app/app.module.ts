import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormPComponent } from './modules/formularioPersona/pages/form-p/form-p.component';
// import { AddTokenInterceptor } from './utils/add-token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    FormPComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  // providers: [
  //   {provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true}
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
