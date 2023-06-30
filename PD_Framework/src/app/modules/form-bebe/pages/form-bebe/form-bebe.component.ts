import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  baby } from 'src/app/interfaces/tbl_bebe';
import { BebeService } from '../../services/bebe.service';
import { Router } from '@angular/router';
import { Tipo_doc } from 'src/app/interfaces/tbl_tip_doc';

@Component({
  selector: 'app-form-bebe',
  templateUrl: './form-bebe.component.html',
  styleUrls: ['./form-bebe.component.css']
})
export class FormBebeComponent implements OnInit{
  form: FormGroup;
  listTipoDoc: Tipo_doc[] = [];

  constructor(private fb: FormBuilder,
    private _babyService: BebeService,
    private router: Router) {
    this.form = this.fb.group({
      nombre_completo: ['', Validators.required],
      fk_id_tipo_doc: ['', Validators.required],
      numero_i: ['', Validators.required],
      edad: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    
    this.getTipoDoc();
  }

  addBebe(){

    const bebe: baby = {

      nombre_completo: this.form.value.nombre_completo,
      numero_i: this.form.value.numero_i,
      edad: this.form.value.edad

      
  }
  console.log(bebe)
}


  getTipoDoc(){
    this._babyService.getTipoDoc().subscribe((data: Tipo_doc[]) => {
      console.log(data)
      this.listTipoDoc =data;
    })
  }


}

