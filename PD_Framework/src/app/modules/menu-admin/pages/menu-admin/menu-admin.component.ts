import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Info } from 'src/app/interfaces/tbl_informacion';
import { AdminService } from '../../services/admin.service';
import Swal from 'sweetalert2';
import { ClasiList, Clasif } from 'src/app/interfaces/tbl_clasificacion';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  listInfo: Info[] = []

  listClasi: ClasiList[] = []

  constructor( private _AdminService: AdminService,
    private aRouter: ActivatedRoute){
      this.id_cuenta = Number(aRouter.snapshot.paramMap.get('id'));
    }

  id_cuenta: number;
  ngOnInit(): void {
    this.getListInfo();
    this.getListClasi();
  }

  getListInfo(){
    this._AdminService.getListInfo().subscribe((data: Info[]) =>{
      this.listInfo = data;
    })
  }

  getListClasi(){
    this._AdminService.getListClasi().subscribe((data: ClasiList[]) =>{
      this.listClasi = data;
      console.log(this.listClasi)
    })
  }

  deleteClasi(id_clasi: number){
    this._AdminService.deleteClasi(id_clasi).subscribe(()=>{
      this.getListClasi();
      Swal.fire({icon: 'success',
        title: 'Exito!',
        text: 'Clasificacion borrada correctamente'
      })
    })
  }

  deleteInfo(id_info: number){
    this._AdminService.deleteInfo(id_info).subscribe(()=>{
      this.getListInfo();
      Swal.fire({icon: 'success',
        title: 'Exito!',
        text: 'Contenido borrado con correctamente'})
    })
  }
}
