import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clasi } from 'src/app/interfaces/tbl_clasificacion';
import { ArchService } from '../../services/arch.service';
import { AdminCraate } from 'src/app/interfaces/tbl_administrador';
import { InfoCreate } from 'src/app/interfaces/tbl_informacion';

@Component({
  selector: 'app-form-arch',
  templateUrl: './form-arch.component.html',
  styleUrls: ['./form-arch.component.css']
})
export class FormArchComponent implements OnInit{

  form: FormGroup;

  constructor(private fb: FormBuilder, private _infoService: ArchService){
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      clasificacion: ['', Validators.required],
      admin: ['', Validators.required],
      archivo: ['', Validators.required],
    })
  }

  
  ngOnInit(): void {
    this.getListClasi();
    this.getListAdmin();
  }

  listClasiOf: Clasi[] = []
  listAdminOf: AdminCraate[] =[]

  //se obtiene lista de cladificacion para llamarlo en los combobox
  getListClasi(){
    this._infoService.getListInfo().subscribe((data: Clasi[]) =>{
      this.listClasiOf = data;
      // console.log(this.listClasiOf);
    })
  }

    //se obtiene lista de administrador para llamarlo en los combobox
  getListAdmin(){
    this._infoService.getListAdmin().subscribe((data: AdminCraate[])=>{
      this.listAdminOf = data;
      // console.log(data)
    })
  }

  addFile(){

    // console.log(this.form.get('titulo')?.value)

    const info: InfoCreate = {
      doc: this.form.get('archivo')?.value,
      fk_id_clasificacion: this.form.value.clasificacion,
      fk_id_admin: this.form.value.admin,
      nombre: this.form.value.titulo,
      descripcion: this.form.value.descripcion
    }

    console.log(info)

    this._infoService.saveInfo(info).subscribe(()=>{
      console.log('save')
    })
  }
  // form: FormGroup;
  // selectedFile: File | undefined;

  // constructor(private fb: FormBuilder, private _infoService: ArchService) {
  //   this.form = this.fb.group({
  //     titulo: ['', Validators.required],
  //     descripcion: ['', Validators.required],
  //     clasificacion: ['', Validators.required],
  //     admin: ['', Validators.required],
  //   })
  // }

  // ngOnInit(): void {
  //   this.getListClasi();
  //   this.getListAdmin();
  // }

  // listClasiOf: Clasi[] = []
  // listAdminOf: AdminCraate[] = []

  // getListClasi() {
  //   this._infoService.getListInfo().subscribe((data: Clasi[]) => {
  //     this.listClasiOf = data;
  //   })
  // }

  // getListAdmin() {
  //   this._infoService.getListAdmin().subscribe((data: AdminCraate[]) => {
  //     this.listAdminOf = data;
  //   })
  // }

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }

  // addFile() {
  //   const info: InfoCreate = {
  //     doc: this.selectedFile,
  //     fk_id_clasificacion: this.form.value.clasificacion,
  //     fk_id_admin: this.form.value.admin,
  //     nombre: this.form.value.titulo,
  //     descripcion: this.form.value.descripcion
  //   }

  //   this._infoService.saveInfo(info).subscribe(() => {
  //     console.log('Archivo guardado exitosamente');
  //   }, error => {
  //     console.error('Error al guardar el archivo', error);
  //   });
  // }
}
