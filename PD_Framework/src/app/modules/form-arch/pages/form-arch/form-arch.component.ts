import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clasi } from 'src/app/interfaces/tbl_clasificacion';
import { ArchService } from '../../services/arch.service';

@Component({
  selector: 'app-form-arch',
  templateUrl: './form-arch.component.html',
  styleUrls: ['./form-arch.component.css']
})
export class FormArchComponent implements OnInit{



  // form: FormGroup;

  // constructor(private fb: FormBuilder){
  //   this.form = this.fb.group({
  //     titulo: ['', Validators.required, Validators.maxLength(5)],
  //     descripcion: ['', Validators.required, Validators.maxLength(20)],
  //     clasificacion: ['', Validators.required],
  //     archivo: ['', Validators.required],
  //     fk_id_clasificacion: [''],
  //     fk_id_admin: ['']

  //   })
  // }

  
  ngOnInit(): void {
    this.getListClas();
  }

  listClasi: Clasi[] = []

  constructor (private _clasiInfo: ArchService){}

  getListClas(){
    this._clasiInfo.getOption().subscribe((data: Clasi[])=>{
      this.listClasi = data;
      console.log(data)
    })
  }
}
