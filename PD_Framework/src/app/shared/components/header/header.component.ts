import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cuentaService } from 'src/app/modules/auth/services/services.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tieneToken: boolean = false;

  ngOnInit(): void {
    this.consultarToken();
  }

  constructor(private router: Router,
    private authService: UsuarioService) {

  }
  


  consultarToken() {
    const token = localStorage.getItem('token')
    this.tieneToken = !!token; // Convierte el token en un valor booleano
  }

  isNavOpen: boolean = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/inicio'])
  }
}




