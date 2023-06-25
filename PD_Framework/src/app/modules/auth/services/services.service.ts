import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/interfaces/tbl_cuenta';
import { enviroment } from 'src/enviroments/enviroments';
import { Cuenta } from '../../../interfaces/tbl_cuenta';

@Injectable({
  providedIn: 'root'
})
export class cuentaService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient, private router:Router) {
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/cuenta/login'
  }

  login(login: Login): Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}`,login);
  }

  async getDatosFromApi() {
    try {
      const response = await this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`).toPromise();
      // Aquí puedes acceder a los datos y al token en la respuesta JSON
      const datos = response.datos;
      console.log(datos);
    } catch (error) {
      console.error(error);
    }
  }
}
