import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClasiList, Clasif } from 'src/app/interfaces/tbl_clasificacion';
import { Info } from 'src/app/interfaces/tbl_informacion';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private myAppUrl: String;
  private myApiUrl: String;

  constructor(private http: HttpClient) { 
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api'
  }

  getListInfo(): Observable<Info[]>{
    return this.http.get<Info[]>(`${this.myAppUrl}${this.myApiUrl}/info/find`)
  }

  getListClasi(): Observable<ClasiList[]>{
    return this.http.get<ClasiList[]>(`${this.myAppUrl}${this.myApiUrl}/clasificacion/find`)
  }

  deleteInfo(id_info: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/info/delete/${id_info}`)
  }

  deleteClasi(id_clasi: number):Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/clasificacion/delete/${id_clasi}`)
  }
}
