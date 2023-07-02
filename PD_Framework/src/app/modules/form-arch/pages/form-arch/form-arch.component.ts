import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clasi } from 'src/app/interfaces/tbl_clasificacion';
import { ArchService } from '../../services/arch.service';
import { Admin, AdminCraate } from 'src/app/interfaces/tbl_administrador';
import { Info, InfoCreate, InfoUpdate } from 'src/app/interfaces/tbl_informacion';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-arch',
  templateUrl: './form-arch.component.html',
  styleUrls: ['./form-arch.component.css']
})
export class FormArchComponent implements OnInit{

  form: FormGroup;
  loading: boolean = false;
  id_info: number;
  id_cuenta: number;
  operacion: string= 'Agregar';
  buttoAction: string= 'subir'

  constructor(private fb: FormBuilder, 
    private _infoService: ArchService,
    private router: Router,
    private _errorService: ErrorService,
    private aRouter: ActivatedRoute){


      this.form = this.fb.group({
        titulo: ['', Validators.required],
        descripcion: ['', Validators.required],
        clasificacion: ['', Validators.required],
        admin: ['', Validators.required],
        archivo: ['', Validators.required],
    })
    this.id_info = Number(aRouter.snapshot.paramMap.get('id'));
    this.id_cuenta = Number(aRouter.snapshot.paramMap.get('id_cuenta'))
  }
  
  ngOnInit(): void {
    this.getListClasi();
    this.getAdmin(this.id_cuenta);

    if (this.id_info != 0) {
      //Es editar 
      this.operacion = 'Editar';
      this.buttoAction =  'Actualizar'
      this.getProduct(this.id_info);
    }
  }

  getProduct(id_info: number){
    this.loading = true;
    this._infoService.getInfo(id_info).subscribe((data: InfoUpdate)=>{
      console.log(data)
      this.loading = false;
      this.form.patchValue({
        titulo: data.nombre,
        descripcion: data.descripcion,
        clasificacion: data.tbl_clasificacione.id_clasificacion,
        admin: data.tbl_administradore.id_admin
      })
    })
  }

  listClasiOf: Clasi[] = []
  AdminOf: Admin[] =[]

  //se obtiene lista de cladificacion para llamarlo en los combobox
  getListClasi(){
    this._infoService.getListInfo().subscribe((dataAdmin: Clasi[]) =>{
      this.listClasiOf = dataAdmin;
    })
  }

    //se obtiene lista de administrador para llamarlo en los combobox
  getAdmin(id_cuenta: number){
    this._infoService.getAdmin(id_cuenta).subscribe((data: Admin)=>{
      this.AdminOf = Array.isArray(data) ? data : [data];
    })
  }


  

  addFile(){

    // console.log(this.form.get('titulo')?.value)

      this.loading= true;

    const info: InfoCreate = {
      doc: this.form.value.archivo,
      fk_id_clasificacion: this.form.value.clasificacion,
      fk_id_admin: this.form.value.Admin,
      nombre: this.form.value.titulo,
      descripcion: this.form.value.descripcion
    }

    if(this.id_info !== 0){

      //es editar
      this.loading = true;
      info.id_info = this.id_info;
      this._infoService.updateInfo(this.id_info, info).subscribe({
        next: (e) => {
          this.loading = false;
          Swal.fire({icon: 'success',
          title: 'Exito!',
          text: 'Contenido actualizado con exito'})
          this.router.navigate(['/menu-admin/',this.id_cuenta])
          },
          error:(e: HttpErrorResponse)=>{
            this._errorService.msjError(e);
            this.loading = false;
          }
        })
    }else{

      //es agregar
      this.loading= true;
      this._infoService.saveInfo(info).subscribe({
        next: (e) => {
          this.loading = false;
          Swal.fire({icon: 'success',
          title: 'Exito!',
          text: 'Contenido agregado con exito'})
          // const rol = localStorage.getItem()
          this.router.navigate(['/menu-admin'])
          },
          error:(e: HttpErrorResponse)=>{
            this._errorService.msjError(e);
            this.loading = false;
          }
        })
    }
  }
}
