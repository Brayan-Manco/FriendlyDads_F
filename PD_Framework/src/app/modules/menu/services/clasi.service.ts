import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clasificacion } from 'src/app/interfaces/tbl_clasificacion';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ClasiService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/clasificacion'
  }

  getClasi(): Observable<Clasificacion[]>{
    return this.http.get<Clasificacion[]>(`${this.myAppUrl}${this.myApiUrl}/find`)
  }
}
