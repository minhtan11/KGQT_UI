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
  confirmed = new BehaviorSubject(0);
  constructor() { }
  //#endregion Constructor

  //#region Init
  ngOnInit() {}
  //#endregion Init

  //#region Function
  // showNotificationError(title:string = 'Lỗi!',text:string = '',confirmButtonColor:string = '#d33',confirmButtonText:string = 'Ok') : Observable<string>{
  //   Swal.fire({
  //     icon: "error",
  //     title: title,
  //     text: text,
  //     confirmButtonColor : confirmButtonColor,
  //     confirmButtonText : confirmButtonText,
  //     heightAuto: false
  //   }).then((res:any)=>{
  //     return res;
  //   });
  //   return ''
  // }
  
  //#endregion Function
}
