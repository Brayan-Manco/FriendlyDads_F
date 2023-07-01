import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCraate } from 'src/app/interfaces/tbl_administrador';
import { Clasi } from 'src/app/interfaces/tbl_clasificacion';
import { Info, InfoCreate, InfoUpdate } from 'src/app/interfaces/tbl_informacion';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ArchService{

  private myAppUrl: String;
  private myApiUrl: String;
  constructor(private http: HttpClient) {
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api'
  }


  getListInfo(): Observable<Clasi[]>{
    return this.http.get<Clasi[]>(`${this.myAppUrl}${this.myApiUrl}/clasificacion/findClasi`)
  }

  getListAdmin(): Observable<AdminCraate[]>{
    return this.http.get<AdminCraate[]>(`${this.myAppUrl}${this.myApiUrl}/admin/create`)
  }

  saveInfo(info: InfoCreate): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}/info/create`,info)
  }

  getInfo(id_info: number): Observable<InfoUpdate>{
    return this.http.get<InfoUpdate>(`${this.myAppUrl}${this.myApiUrl}/info/findOneUpdate/${id_info}`)
  }

  updateInfo(id_info: number, info: InfoCreate): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/info/update/${id_info}`,info)
  }
}
