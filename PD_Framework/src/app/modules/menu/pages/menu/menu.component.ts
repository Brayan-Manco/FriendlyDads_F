import { Component, OnInit } from '@angular/core';
import { ClasiService } from '../../services/clasi.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

    ngOnInit(): void {
        this.getClasi();
    }
    

    constructor(private _clasiService: ClasiService){}

    getClasi(){
        this._clasiService.getClasi().subscribe(data => {
            console.log(data);
        })
    }

}
