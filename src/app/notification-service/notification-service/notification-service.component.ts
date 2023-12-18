import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-notification-service',
  templateUrl: './notification-service.component.html',
  styleUrls: ['./notification-service.component.scss'],
})
export class NotificationServiceComponent  implements OnInit {
  //#region Constructor
  constructor() { }
  //#endregion Constructor

  //#region Init
  ngOnInit() {}
  //#endregion Init

  //#region Function
  showNotiError(title:string,text:string) {
    Swal.mixin({
      customClass: {
        confirmButton: "btn btn-danger",
      },
      buttonsStyling: false
    }).fire({
      icon: "error",
      title: title,
      text: text,
      heightAuto: false
    });
  }
  
  //#endregion Function
}
