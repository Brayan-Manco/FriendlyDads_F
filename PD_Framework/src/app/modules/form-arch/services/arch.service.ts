import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Clasi } from 'src/app/interfaces/tbl_clasificacion';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ArchService{

  private myAppUrl: String;
  private myApiUrl: String;
  constructor(private http: HttpClient) {
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/clasificacion'
   }

  getOption(): Observable<Clasi[]>{
    return this.http.get<Clasi[]>(`${this.myAppUrl}${this.myApiUrl}/findClasi`)
  }
}
