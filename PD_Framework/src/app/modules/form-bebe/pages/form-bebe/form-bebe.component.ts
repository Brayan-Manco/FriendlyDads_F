import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bebe } from 'src/app/interfaces/tbl_bebe';

@Component({
  selector: 'app-form-bebe',
  templateUrl: './form-bebe.component.html',
  styleUrls: ['./form-bebe.component.css']
})
export class FormBebeComponent implements OnInit{
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre_completo: ['', Validators.required],
      fk_id_tipo_doc: ['', Validators],
      numero_i: ['', Validators.required],
      edad: ['', Validators.required],
      fk_id_usuario: ['', Validators]
    })
  }

  ngOnInit(): void {
    
  }
}
