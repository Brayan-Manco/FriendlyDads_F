import { Component, OnInit } from '@angular/core';
import { FormPerService } from '../../services/form-per.service';
import { Tipo_doc } from 'src/app/interfaces/tbl_tip_doc';
import { Estado } from 'src/app/interfaces/tbl_estado';
import { Parentesco } from 'src/app/interfaces/tbl_parentesco';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Usuario, UsuarioFind } from 'src/app/interfaces/tbl_usuario';
import Swal from 'sweetalert2';
import { ErrorService } from 'src/app/services/error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-per',
  templateUrl: './form-per.component.html',
  styleUrls: ['./form-per.component.css']
})
export class FormPerComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  id_user: number;
  id_cuenta: number;
  operacion: string = ''
  ngOnInit(): void {
    this.getParen();
    this.getEst();
    this.getTipoDoc();

    this.aRouter.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id_user')) {
        this.operacion = 'Actualizar'
        this.id_user = Number(params.get('id_user'));
        
      } else if (params.has('id_cuenta')) {
        this.id_cuenta = Number(params.get('id_cuenta'));
        this.operacion = 'crear'
      }
    });
  }

  constructor (private _perService: FormPerService,
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private router : Router,
    private _errorService: ErrorService){

    this.form = this.fb.group({
      parentesco: ['', Validators.required],
      estado: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      tipoDoc: ['', Validators.required],
      numero: ['', Validators.required],
      edad: ['', Validators.required],
      foto: ['', Validators.required],
    })
      this.id_user = Number(aRouter.snapshot.paramMap.get('id_user'));
      this.id_cuenta = Number(aRouter.snapshot.paramMap.get('id_cuenta'))
      // console.log(this.id_user)
    }

  listEstado: Estado[] = [];
  listTipoDoc: Tipo_doc[] = [];
  listParen: Parentesco[] = [];

  getParen(){
    this._perService.getParen().subscribe((data: Parentesco[]) => {
      // console.log(data)
      this.listParen = data;
    })
  }

  getTipoDoc(){
    this._perService.getTipoDoc().subscribe((data: Tipo_doc[]) => {
      // console.log(data)
      this.listTipoDoc =data;
    })
  }

  getEst(){
    this._perService.getEstado().subscribe((data: Estado[]) => {
      // console.log(data)
      this.listEstado =data;
    })
  }

  getUser(id_user: number){
    this.loading = true;
    this._perService.getInfoUserForUpadte(id_user).subscribe((data: UsuarioFind)=>{
      console.log(data)
      this.loading= false;
      this.form.patchValue({
        parentesco: data.tbl_parentesco.id_paren,
        estado: data.tbl_estado.id_estado,
        nombres: data.nombres,
        apellidos: data.apellidos,
        tipoDoc: data.tbl_tipo_doc.id_tipo_doc,
        numero: data.numero_i,
        edad: data.edad
      })
    })
  }

  addUser(){
    console.log('hola')
    this.loading =true;

    const user : Usuario = {
      fk_id_paren: this.form.value.parentesco,
      fk_id_estado: this.form.value.estado,
      ruta_imagen: this.form.value.foto,
      nombres: this.form.value.nombres,
      apellidos: this.form.value.apellidos,
      fk_id_tipo_doc: this.form.value.tipoDoc,
      numero_i: this.form.value.numero,
      edad: this.form.value.edad,
      fk_id_cuenta: this.id_cuenta
    }

    if (this.id_user) {
      console.log('user')
    }

    if(this.id_cuenta){
      this.loading = true;
      this._perService.saveUser(user).subscribe({
      next: (e) => {
        console.log(user)
        this.loading = false;
        Swal.fire({icon: 'success',
        title: 'Exito!',
        text: 'Datos agregado con exito'})
        // this.router.navigate(['/perfil/',this.id_cuenta])
        },
        error:(e: HttpErrorResponse)=>{
          this._errorService.msjError(e);
          this.loading = false;
        }
      })
    }
  }
}

