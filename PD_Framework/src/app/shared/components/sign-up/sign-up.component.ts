import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  @Output() switchForm = new EventEmitter<string>();
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  register() {
    // Aquí puedes agregar la lógica para registrar al usuario y validar los campos
    console.log('Usuario:', this.username);
    console.log('Correo electrónico:', this.email);
    console.log('Contraseña:', this.password);
    console.log('Confirmar contraseña:', this.confirmPassword);
  }

}
