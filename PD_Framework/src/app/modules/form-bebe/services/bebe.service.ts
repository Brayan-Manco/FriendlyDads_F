import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baby } from 'src/app/interfaces/tbl_bebe';
import { Tipo_doc } from 'src/app/interfaces/tbl_tip_doc';
import { UsuarioFind } from 'src/app/interfaces/tbl_usuario';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class BebeService {

  private myAppUrl: string;
  private myApiUrl: string

  constructor(private http: HttpClient) { 
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api'
  }

  getTipoDoc(): Observable<Tipo_doc[]>{
    return this.http.get<Tipo_doc[]>(`${this.myAppUrl}${this.myApiUrl}/tipoDoc/obtener`)
  }
  
  saveFormbebe(Formbebe: baby ): Observable<void>{

    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}/bebe/create`,Formbebe)
  }

  getUser(id_cuenta: number): Observable<UsuarioFind>{
    return this.http.get<UsuarioFind>(`${this.myAppUrl}${this.myApiUrl}/info/findOneUpdate/${id_cuenta}`)
  }
}
