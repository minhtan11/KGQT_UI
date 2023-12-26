import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
import { NotificationServiceComponent } from '../notification-service/notification-service/notification-service.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private notification : NotificationServiceComponent,) { }

  validation(formGroup:FormGroup,formSetup:any){
    let array = Object.keys(formGroup.controls);
    let message = '';
    let isError = false;
    for (let index = 0; index < array.length; index++) {
      let data = formGroup.controls[array[index]];
      if (data) {
        if (data?.invalid) {
          isError = true;
          let obj = formSetup.find((x:any) => x.field == array[index]);
          if (obj) {
            message = obj.headerText + ' không được bỏ trống';
            this.notification.showNotiError('',message,true);
          }
          break;
        }
      }
    }
    return isError;
  }
}
