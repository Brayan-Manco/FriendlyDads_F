import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { cuentaService } from '../../services/services.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/tbl_cuenta';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  correo: string ='';
  contrasena: string= '';

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

    this._cuentaService.login(login).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/menu'])
        console.log(token)
        }
      })
    }
}
