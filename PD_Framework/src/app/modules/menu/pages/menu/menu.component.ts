import { Component, OnInit } from '@angular/core';
import { ClasiService } from '../../services/clasi.service';
import { Clasificacion } from 'src/app/interfaces/tbl_clasificacion';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

     userId: string = '';
     listClasi : Clasificacion[] = [];
    //  const token = localStorage.getItem('token')
    constructor(private _clasiService: ClasiService){}

    ngOnInit(): void {
        this.getClasi();

        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken: any = jwt_decode(token);
            this.userId = decodedToken.id;
        } else {
            console.error('No se encontró un token válido');
        }
    }

    getClasi(){
        this._clasiService.getClasi().subscribe(data => {
            this.listClasi= data;
            console.log(data);
        })
    }

}
