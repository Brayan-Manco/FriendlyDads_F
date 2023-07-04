import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Clasif } from 'src/app/interfaces/tbl_clasificacion';


@Component({
  selector: 'app-clasi',
  templateUrl: './clasi.component.html',
  styleUrls: ['./clasi.component.css']
})
export class ClasiComponent implements OnInit{
  form: FormGroup;
  id_cuenta: number;

  constructor(private fb: FormBuilder,
    private aRouter: ActivatedRoute){
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

    console.log(clasi)

  }
}
