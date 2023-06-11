import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  //capturamos lo valores del html
  usuario: string= '';
  correo: string= '';
  contrasena: string= '';
  confirContrasena: string= '';

  constructor(){
  }

  ngOnInit(): void {
    
  }

  addCuenta(){
    //validaciones de campos

    if (this.usuario == '' || this.correo == '' || 
        this.contrasena == '' || this.confirContrasena == '' ) {
      alert('Todos los compos son abligatorios')
      
      return;
    }

  }
}
