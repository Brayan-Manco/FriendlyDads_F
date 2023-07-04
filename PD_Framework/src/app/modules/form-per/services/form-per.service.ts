import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from 'src/app/interfaces/tbl_estado';
import { Parentesco } from 'src/app/interfaces/tbl_parentesco';
import { Tipo_doc } from 'src/app/interfaces/tbl_tip_doc';
import { Usuario, UsuarioFind } from 'src/app/interfaces/tbl_usuario';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class FormPerService {

  private myAppUrl: String;
  private myApiUrl: String;

  constructor(private http: HttpClient) { 
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api'
  }

  getParen(): Observable<Parentesco[]>{
    return this.http.get<Parentesco[]>(`${this.myAppUrl}${this.myApiUrl}/parentesco/listParen`)
  }

  getEstado(): Observable<Estado[]>{
    return this.http.get<Estado[]>(`${this.myAppUrl}${this.myApiUrl}/estado/listEst`)
  }

  getTipoDoc(): Observable<Tipo_doc[]>{
    return this.http.get<Tipo_doc[]>(`${this.myAppUrl}${this.myApiUrl}/tipoDoc/obtener`)
  }

  // getUser(id_info: number): Observable<UsuarioFind>{
  //   return this.http.get<UsuarioFind>(`${this.myAppUrl}${this.myApiUrl}/usuario/findUserOne/${id_info}`)
  // }


  getInfoUserForUpadte(id_user: number): Observable<UsuarioFind>{
    return this.http.get<UsuarioFind>(`${this.myAppUrl}${this.myApiUrl}/info/findOneUpdate/${id_user}`)
  }

  saveUser(user: Usuario): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}/usuario/create`,user)
  }


}
