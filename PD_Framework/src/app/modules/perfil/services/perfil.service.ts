import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { getBebe } from 'src/app/interfaces/tbl_bebe';
import { UsuarioFind } from 'src/app/interfaces/tbl_usuario';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class PerfilService implements OnInit {

  private myAppUrl: String;
  private myApiUrl: String;

  ngOnInit(): void {
    
  }

  constructor(private http: HttpClient) { 
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api';
  }

  getBebeInfo(id_user: number):Observable<getBebe[]>{
    return this.http.get<getBebe[]>(`${this.myAppUrl}${this.myApiUrl}/bebe/findForUser/${id_user}`)
  }

  deleteBebe(id_bebe: number){
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/bebe/deleteBebe/${id_bebe}`)
  }


  getUserInfo(id_user: number): Observable<UsuarioFind[]>{
    return this.http.get<UsuarioFind[]>(`${this.myAppUrl}${this.myApiUrl}/usuario/findUserOne/${id_user}`)
    .pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError('Ocurrió un error al obtener la información del usuario.');
      })
    );
  }

}
