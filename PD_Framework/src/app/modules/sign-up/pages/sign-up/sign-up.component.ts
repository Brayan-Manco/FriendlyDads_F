import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/tbl_cuenta';
import { __values } from 'tslib';
import { cuentaService } from '../../services/services.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usuario: string = '';
  correo: string = '';
  contrasena: string = '';
  confirmContrasena: string = '';
  fk_id_rol: number = 2;

  loading: boolean = false;

  constructor(private _cuentaService: cuentaService,
    private router: Router){

  }

  addCuenta(){


    if(this.usuario == '' || this.correo == '' || this.contrasena == '' || this.confirmContrasena == ''){
      
      Swal.fire({icon: 'error',
      title: 'Oops...',
      text: 'Todos los campos son requeridos!'})
      return;
    } 

    if(this.contrasena != this.confirmContrasena){
      Swal.fire({icon: 'error',
      title: 'Oops...',
      text: 'La contraseña no coincide'})
      return;
    }

    const cuenta: Cuenta = {
      usuario: this.usuario,
      correo: this.correo,
      contrasena: this.contrasena,
      fk_id_rol: this.fk_id_rol
    }


    this.loading = true;
    this._cuentaService.signIn(cuenta).subscribe({
      next: (v) =>{
        Swal.fire({icon: 'success',
        title: 'Cuenta creada',
        text: 'Ya puedes navegar con nosotros'})
        this.router.navigate(['/auth'])
        },
      
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.msjError(e);
      },
      complete: ()=> console.info('complete')
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

  ngOnInit(): void {
    
  }
}
