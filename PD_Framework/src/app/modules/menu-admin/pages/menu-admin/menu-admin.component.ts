import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/interfaces/tbl_informacion';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {

  listInfo: Info[]=[{
    id_info: 1,
    nombre: 'nulo',
    archivo: 'nulo',
    fk_id_clasificacion: 1,
    fk_id_admin: 1,
    fechaC:'08-09-2023',
    fechaUp: '08-09-2023' 
  },
  {
    id_info: 1,
    nombre: 'nulo',
    archivo: 'nulo',
    fk_id_clasificacion: 1,
    fk_id_admin: 1,
    fechaC:'08-09-2023',
    fechaUp: '08-09-2023' 
  },
  {
    id_info: 1,
    nombre: 'nulo',
    archivo: 'nulo',
    fk_id_clasificacion: 1,
    fk_id_admin: 1,
    fechaC:'08-09-2023',
    fechaUp: '08-09-2023' 
  },
  {
    id_info: 1,
    nombre: 'nulo',
    archivo: 'nulo',
    fk_id_clasificacion: 1,
    fk_id_admin: 1,
    fechaC:'08-09-2023',
    fechaUp: '08-09-2023' 
  },
  ]

  constructor(){}

}
