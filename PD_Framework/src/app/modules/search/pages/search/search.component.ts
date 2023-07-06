import { Component, OnInit } from '@angular/core';
import { infoSearch } from 'src/app/interfaces/tbl_informacion';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listInfo: infoSearch[]=[]

  id_info: number;

  ngOnInit(): void {
    this.getInfo(this.id_info)
  }

  constructor( private _searchService: SearchService,
    private aRouter: ActivatedRoute){
      this.id_info = Number(aRouter.snapshot.paramMap.get('id'));
    }

  getInfo(id_info: number){
    this._searchService.getListInfo(id_info).subscribe((data: infoSearch[])=>{
      this.listInfo = data;
      console.log(this.listInfo);
    })
  }

}
