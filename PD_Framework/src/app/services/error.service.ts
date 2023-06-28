import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor (){

  }
  msjError(e: HttpErrorResponse){
    if(e.error.msg){
      Swal.fire({icon: 'error',
      title: 'Oops...',
      text: `${e.error.msg}`})
    }else{
      Swal.fire({icon: 'error',
      title: 'Oops...',
      text: 'Ha ocurrido un error, por favor comuniquese con el adminstrador'})
    }
  }

}
