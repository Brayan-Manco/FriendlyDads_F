import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-clasi',
  templateUrl: './clasi.component.html',
  styleUrls: ['./clasi.component.css']
})
export class ClasiComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      clasificacion: ['', Validators.required, Validators.maxLength(5)],
      descripcion: ['', Validators.required, Validators.maxLength(20)],
    })
  }
}
