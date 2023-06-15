import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() switchForm = new EventEmitter<string>();
  email: string = '';
  password: string = '';

  login() {
    // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
    console.log('Correo electrónico:', this.email);
    console.log('Contraseña:', this.password);
  }
}
