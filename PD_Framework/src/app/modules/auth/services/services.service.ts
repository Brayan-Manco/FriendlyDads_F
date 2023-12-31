import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Login, LoginResponse } from 'src/app/interfaces/tbl_cuenta';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class cuentaService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient, private router:Router) {
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/cuenta'
  }

  login(login: Login): Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`,login);
  }
}

