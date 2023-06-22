import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../interfaces/tbl_usuario';
import { Cuenta } from 'src/app/interfaces/tbl_cuenta';
import { __values } from 'tslib';
import { cuentaService } from '../../services/services.service';

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

  constructor(private _cuentaService: cuentaService){

  }

  addCuenta(){
    if(this.usuario == '' || this.correo == '' || this.contrasena || this.confirmContrasena == ''){
      alert('Todos los campos son obligatorios');
      return;
    }

    if(this.contrasena != this.confirmContrasena){
      alert('Las contraseñas no coinciden');
      return;
    }

    const cuenta: Cuenta = {
      usuario: this.usuario,
      correo: this.correo,
      contrasena: this.contrasena,
      fk_id_rol: this.fk_id_rol
    }

    this._cuentaService.signIn(cuenta).subscribe(data =>{
      console.log('El usuario fue registrado correctamente');
    })
    console.log(cuenta)

  }

  ngOnInit(): void {
    
  }
}
