import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { infoSearch } from 'src/app/interfaces/tbl_informacion';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private myAppUrl: String;
  private myApiUrl: String;

  constructor(private http: HttpClient) { 
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/info'
  }

  getListInfo(id_info: number): Observable<infoSearch[]>{
    return this.http.get<infoSearch[]>(`${this.myAppUrl}${this.myApiUrl}/findInfo/${id_info}`)
  }
}
