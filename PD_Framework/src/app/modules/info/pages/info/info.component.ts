import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { ActivatedRoute } from '@angular/router';
import { oneInfo } from 'src/app/interfaces/tbl_informacion';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{

  id_info: number;

  ngOnInit(): void {
    this.getUser(this.id_info)
  }

  constructor( private _infoService: InfoService,
    private aRouter: ActivatedRoute) { 

      this.id_info = Number(this.aRouter.snapshot.paramMap.get('id'));
      // console.log(this.id_cuenta)
    }

  info: oneInfo[]=[]

  getUser(id_info: number){
    this._infoService.getInfo(id_info).subscribe((data: oneInfo[])=>{
      this.info = Array.isArray(data) ? data : [data];
      console.log(this.info)
    })
  }
}
