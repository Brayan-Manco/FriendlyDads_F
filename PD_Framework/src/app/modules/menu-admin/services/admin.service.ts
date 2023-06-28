import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.myApiUrl = 'api/info'
  }

  getListInfo(): Observable<Info[]>{
    return this.http.get<Info[]>(`${this.myAppUrl}${this.myApiUrl}/find`)
  }

  deleteInfo(id_info: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/delete/${id_info}`)
  }
}
