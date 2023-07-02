import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clasif } from 'src/app/interfaces/tbl_clasificacion';
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

  getListClasi(): Observable<Clasif[]>{
    return this.http.get<Clasif[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

}
