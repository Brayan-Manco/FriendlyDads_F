import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/tbl_cuenta';
import Swal from 'sweetalert2';
import { cuentaService } from '../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  usuario: string='' 
  correo: string ='';
  contrasena: string= '';
  fk_id_rol!: number;

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

    const cuenta: Cuenta = {
      usuario: this.usuario,
      correo: this.correo,
      contrasena: this.contrasena,
      fk_id_rol: this.fk_id_rol

    }

    this._cuentaService.login(cuenta).subscribe({
      next: (data) => {
        this.router.navigate(['/menu'])
        console.log(data);

      }
    })
  }
}
