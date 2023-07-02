import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Info } from 'src/app/interfaces/tbl_informacion';
import { AdminService } from '../../services/admin.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {


  id_cuenta: number;
  ngOnInit(): void {
    this.getListInfo()
  }

  listInfo: Info[] = []

  constructor( private _infoService: AdminService,
    private aRouter: ActivatedRoute){
      this.id_cuenta = Number(aRouter.snapshot.paramMap.get('id'));
    }

  getListInfo(){
    this._infoService.getListInfo().subscribe((data: Info[]) =>{
      this.listInfo = data;
    })
  }

  deleteInfo(id_info: number){
    this._infoService.deleteInfo(id_info).subscribe(()=>{
      this.getListInfo();
      Swal.fire({icon: 'success',
        title: 'Exito!',
        text: 'Contenido borrado con exito'})
    })
  }
}
