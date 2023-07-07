import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { UsuarioFind } from 'src/app/interfaces/tbl_usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { getBebe } from 'src/app/interfaces/tbl_bebe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  id_cuenta : number;

  ngOnInit(): void {
    this.getUser(this.id_cuenta);
    this.getBebe(this.id_cuenta);
  }

  constructor( private _perfilService: PerfilService,
    private aRouter: ActivatedRoute,
    private router: Router) { 


      this.id_cuenta = Number(this.aRouter.snapshot.paramMap.get('id'));
      console.log(this.id_cuenta)
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
      this.getBebe(this.id_cuenta);
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

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/inicio'])
  }
}
