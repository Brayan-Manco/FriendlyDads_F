import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clasificacion, Clasif} from 'src/app/interfaces/tbl_clasificacion';


@Component({
  selector: 'app-clasi',
  templateUrl: './clasi.component.html',
  styleUrls: ['./clasi.component.css']
})
export class ClasiComponent implements OnInit{
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      foto: ['',Validators.required],
      clasificacion: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
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
