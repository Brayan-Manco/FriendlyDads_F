import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/tbl_cuenta';
import { __values } from 'tslib';
import { cuentaService } from '../../services/services.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  titularAlerta: string=''

  usuario: string = '';
  correo: string = '';
  contrasena: string = '';
  confirmContrasena: string = '';
  fk_id_rol: number = 2;

  constructor(private _cuentaService: cuentaService,
    private router: Router){

  }

  addCuenta(){


    if(this.usuario == '' || this.correo == '' || this.contrasena || this.confirmContrasena == ''){
      
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

    this._cuentaService.signIn(cuenta).subscribe(data =>{
      Swal.fire({icon: 'success',
      title: 'Cuenta creada',
      text: 'Ya puedes navegar con nosotros'})
      this.router.navigate(['/auth'])
    })
    console.log(cuenta)

  }

  ngOnInit(): void {
    
  }
}
