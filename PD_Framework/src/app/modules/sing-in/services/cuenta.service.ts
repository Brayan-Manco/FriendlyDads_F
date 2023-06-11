import { Injectable } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/tbl_cuenta';
import { enviroment } from 'src/enviroments/enviroments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 

    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/cuenta/'
  }

  signIn(cuenta: Cuenta): Observable<any> {
    
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, cuenta)
  }
}
