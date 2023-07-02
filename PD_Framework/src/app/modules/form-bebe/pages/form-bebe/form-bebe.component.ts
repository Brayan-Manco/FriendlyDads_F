import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  baby } from 'src/app/interfaces/tbl_bebe';
import { BebeService } from '../../services/bebe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipo_doc } from 'src/app/interfaces/tbl_tip_doc';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-form-bebe',
  templateUrl: './form-bebe.component.html',
  styleUrls: ['./form-bebe.component.css']
})
export class FormBebeComponent implements OnInit{

  id_usuario: number;
  form: FormGroup;
  listTipoDoc: Tipo_doc[] = [];
  loading : boolean = false;

  constructor(private fb: FormBuilder,
    private _babyService: BebeService,
    private router: Router,
    private aRouter: ActivatedRoute,
    private _errorServive : ErrorService){


    this.form = this.fb.group({
      nombre_completo: ['', Validators.required],
      fk_id_tipo_doc: ['', Validators.required],
      numero_i: ['', Validators.required],
      edad: ['', Validators.required],
    })

    this.id_usuario = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    
    this.getTipoDoc();
  }

  addBebe(){

    const bebe: baby = {
      nombre_completo: this.form.value.nombre_completo,
      fk_id_tipo_doc: this.form.value.fk_id_tipo_doc,
      numero_i: this.form.value.numero_i,
      edad: this.form.value.edad,
      fk_id_usuario: this.id_usuario
  }

  console.log(bebe)
  this.loading = true;
   this._babyService.saveFormbebe(bebe).subscribe({
    next: (e) => {
      this.loading = false;
      Swal.fire({icon: 'success',
      title: 'Exito!',
      text: 'Contenido agregado con exito'})
      // const rol = localStorage.getItem()
      this.router.navigate(['/perfil/',this.id_usuario])
      },
      error:(e: HttpErrorResponse)=>{
        this._errorServive.msjError(e);
        this.loading = false;
      }
   })
   console.log('!Bebe agregado¡ ');
}


  getTipoDoc(){
    this._babyService.getTipoDoc().subscribe((data: Tipo_doc[]) => {
      console.log(data)
      this.listTipoDoc = data;
    })
  }


}

