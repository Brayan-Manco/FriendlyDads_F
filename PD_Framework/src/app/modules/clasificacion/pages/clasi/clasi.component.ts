import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clasif } from 'src/app/interfaces/tbl_clasificacion';
import { ClasiService } from 'src/app/modules/menu/services/clasi.service';
import { ClasificacionService } from '../../services/clasificacion.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';


@Component({
  selector: 'app-clasi',
  templateUrl: './clasi.component.html',
  styleUrls: ['./clasi.component.css']
})
export class ClasiComponent implements OnInit{
  form: FormGroup;
  id_cuenta: number;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _errorService: ErrorService,
    private aRouter: ActivatedRoute,
    private _clasiService: ClasificacionService){
    this.form = this.fb.group({
      foto: ['',Validators.required],
      clasificacion: ['', Validators.required],
      descripcion: ['', Validators.required]
    })

    this.id_cuenta = Number(aRouter.snapshot.paramMap.get('id_cuenta'))

  }
  ngOnInit(): void {
    
  }

  addClasi(){
    // console.log(this.form.value.titulo);

    const clasi: Clasif ={
      foto: this.form.value.foto,
      clasificacion: this.form.value.clasificacion,
      descripcion: this.form.value.descripcion
    }

   

    this._clasiService.saveClasi(clasi).subscribe({
      next: (e) => {
        this.loading = false;
        Swal.fire({icon: 'success',
        title: 'Exito!',
        text: 'Contenido agregado con exito'})
        // const rol = localStorage.getItem()
        this.router.navigate(['/menu-admin/', this.id_cuenta])
        },
        error:(e: HttpErrorResponse)=>{
          this._errorService.msjError(e);
          this.loading = false;
        }
    })
  }
}
