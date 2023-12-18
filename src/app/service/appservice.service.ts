import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  validation(formGroup:FormGroup,formSetup:any){
    let array = Object.keys(formGroup.controls);
    let isError = false;
    let message = '';
    array.forEach(field => {
      let data = formGroup.controls[field];
      if (data) {
        if (data?.invalid) {
          isError = true;
          let obj = formSetup.find((x:any) => x.field == field);
          if (obj) {
            message += `<div class="d-flex justify-content-center"><p class="font-weight-bold">${obj.headerText} &nbsp;không được bỏ trống</p></div>`;
          }
        }
      }
    });
    if (isError) {
      Swal.mixin({
        customClass: {
          confirmButton: "btn btn-danger",
        },
        buttonsStyling: false
      }).fire({
        icon: "error",
        html: message,
        confirmButtonText : 'OK',
        heightAuto: false
      })
    }
    return isError;
  }
}
