import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { cuentaService } from '../../services/services.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/tbl_cuenta';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';

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
    }

    const login: Login = {
      correo: this.correo,
      contrasena: this.contrasena,
    }


    this.loading =true;
    this._cuentaService.login(login).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        // const rol = localStorage.getItem()
        this.router.navigate(['/menu-admin'])
        console.log(token)
        },
        error:(e: HttpErrorResponse)=>{
          this._errorService.msjError(e);
          this.loading = false;
        }
      })
    }
}

