import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { cuentaService } from '../../services/services.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/tbl_cuenta';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  correo: string ='';
  contrasena: string= '';
  loading: boolean= false;

  constructor(private _cuentaService: cuentaService,
    private router: Router ){}

  ngOnInit(): void {}

  login(){
    if(this.correo == '' || this.contrasena == ''){
      Swal.fire({
        icon: 'error',
        title: 'Hay campos vacios',
        text: 'Digite todos los datos'
      });
    }

    const login: Login = {
      correo: this.correo,
      contrasena: this.contrasena,
    }

    this.loading =true;
    this._cuentaService.login(login).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/menu'])
        console.log(token)
        },
        error:(e: HttpErrorResponse)=>{
          this.msjError(e);
          this.loading = false;
        }
      })
    }

    msjError(e: HttpErrorResponse){
      if(e.error.msg){
        Swal.fire({icon: 'error',
        title: 'Oops...',
        text: `${e.error.msg}`})
      }else{
        Swal.fire({icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error, por favor comuniquese con el adminstrador'})
      }
    }
}
