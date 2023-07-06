import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { oneInfo } from 'src/app/interfaces/tbl_informacion';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private myAppUrl: String;
  private myApiUrl: String;

  constructor(private http: HttpClient) { 
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api';
  }

  getInfo(id_info: number): Observable<oneInfo[]>{
    return this.http.get<oneInfo[]>(`${this.myAppUrl}${this.myApiUrl}/info/findOneInfo/${id_info}`)
    .pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError('Ocurrió un error al obtener la información del usuario.');
      })
    );
  }
}
