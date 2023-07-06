import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clasi, Clasif } from 'src/app/interfaces/tbl_clasificacion';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/clasificacion'
  }

  saveClasi(clasi: Clasif): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, clasi)
  }
}
