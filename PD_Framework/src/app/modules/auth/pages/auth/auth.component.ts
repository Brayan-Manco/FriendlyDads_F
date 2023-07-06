import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { cuentaService } from '../../services/services.service';
import { Router } from '@angular/router';
import { Login, Logueo } from 'src/app/interfaces/tbl_cuenta';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  
  correo: string ='';
  contrasena: string= '';
  loading: boolean= false;

  constructor(private _cuentaService: cuentaService,
    private router: Router,
    private _errorService: ErrorService ){}

  ngOnInit(): void {}

  login(){
    if(this.correo == '' || this.contrasena == ''){
      Swal.fire({
        icon: 'error',
        title: 'Hay campos vacios',
        text: 'Digite todos los datos'
      }); 
      return
    }

    const login: Login = {
      correo: this.correo,
      contrasena: this.contrasena,

    }
    
    


    this.loading =true;
    this._cuentaService.login(login).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        const decodedToken : any = jwt_decode(token)

        const id = decodedToken.id;
        const rol = decodedToken.rol; 
        const vez = decodedToken.primera_vez;

        if(rol == 1){
          this.router.navigate(['/menu-admin/',id])
        }        
        if(rol == 2){
          if(vez == 0){
              this.router.navigate(['form-per/cuenta/',id])
          }if(vez == 1){
            this.router.navigate(['/perfil/',id])
          }
        }
          
        },
        error:(e: HttpErrorResponse)=>{
          this._errorService.msjError(e);
          this.loading = false;
        }
      })
    }
}

