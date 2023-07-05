import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { UsuarioFind } from 'src/app/interfaces/tbl_usuario';
import { ActivatedRoute } from '@angular/router';
import { getBebe } from 'src/app/interfaces/tbl_bebe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  id_user : number;

  ngOnInit(): void {
    this.getUser(this.id_user);
    this.getBebe(this.id_user);
  }

  constructor( private _perfilService: PerfilService,
    private aRouter: ActivatedRoute) { 


      this.id_user = Number(this.aRouter.snapshot.paramMap.get('id'));
      console.log(this.id_user)
    }

    listUser: UsuarioFind[] = [];
    listBebe: getBebe[] = [];

  getBebe(id_user: number){
    this._perfilService.getBebeInfo(id_user).subscribe((data: getBebe[])=>{
      this.listBebe = data;
      console.log(this.listBebe);
    })
  }

  deleteBebe(id_bebe: number){
    this._perfilService.deleteBebe(id_bebe).subscribe(()=>{
      this.getBebe(this.id_user);
      Swal.fire({icon: 'success',
        title: 'Exito!',
        text: 'Contenido borrado con exito'})
    })
  }

  
  getUser(id_user: number){
    this._perfilService.getUserInfo(id_user).subscribe((data: UsuarioFind[])=>{
      console.log(data)
      this.listUser = Array.isArray(data) ? data : [data];
    })
  }
}
