import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from 'src/app/interfaces/tbl_cuenta';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class cuentaService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http : HttpClient) { 
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/cuenta/'
  }

  signIn (cuenta: Cuenta):Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, cuenta);
  }
}
