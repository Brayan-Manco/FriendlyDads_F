import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-clasi',
  templateUrl: './clasi.component.html',
  styleUrls: ['./clasi.component.css']
})
export class ClasiComponent implements OnInit{
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }
  
  ngOnInit(): void {
    
  }

  addClasi(){
    console.log('Add clasi');
  }
}
