import { Component, OnInit } from '@angular/core';
import { ClasiService } from '../../services/clasi.service';
import { Clasificacion } from 'src/app/interfaces/tbl_clasificacion';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

     listClasi : Clasificacion[] = [{
        id_clasificacion: 1,
        clasificacion:'estimulaicon teprana',
        descripcion:'consejos de salud',
        foto: 'nulo',
        
    },
    {
        id_clasificacion: 2,
        clasificacion:'estimulaicon teprana',
        descripcion:'consejos de salud',
        foto: 'nulo'
    },
    {
        id_clasificacion: 3,
        clasificacion:'estimulaicon teprana',
        descripcion:'consejos de salud',
        foto: 'nulo'
    },
    {
        id_clasificacion: 4,
        clasificacion:'estimulaicon teprana',
        descripcion:'consejos de salud',
        foto: 'nulo',
    },
    ];

    constructor(private _clasiService: ClasiService){}

    ngOnInit(): void {
        // this.getClasi();
    }

    // getClasi(){
    //     this._clasiService.getClasi().subscribe(data => {
    //         this.listClasi= data;
    //         console.log(data);
    //     })
    // }

}
