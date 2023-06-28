import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/interfaces/tbl_informacion';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  ngOnInit(): void {
    this.getListInfo()
  }

  listInfo: Info[] = []

  constructor( private _infoService: AdminService ){}

  getListInfo(){
    this._infoService.getListInfo().subscribe((data) =>{
      this.listInfo = data;
    })
  }

  deleteInfo(id_info: number){
    this._infoService.deleteInfo(id_info).subscribe(data=>{
      
    })
  }
}
