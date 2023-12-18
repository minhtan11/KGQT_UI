import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent  implements OnInit {
  //#region Constructor
constructor() { }
//#endregion Constructor

//#region Init
ngOnInit() {}
//#endregion Init

//#region Function
execByParameter(parameter:any = []){
  let queryParams = new HttpParams();
  parameter.forEach((param:any) => {
    //let field = Object.keys()
  });
}
//#endregion Function
}
