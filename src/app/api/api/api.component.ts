import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent  implements OnInit {
  //#region Constructor
  private destroy$ = new Subject<void>();
  private subject = new Subject<any>();
  constructor(
    private http : HttpClient,
  ) { }
//#endregion Constructor

//#region Init
ngOnInit() {
  
}
//#endregion Init

//#region Function
execByParameter(controller:any,router:any,queryParams:any,showLoading:any = false) {
  if(showLoading) this.isLoad(true);
  this.http.get(environment.apiUrl+controller+'/'+router,{params:queryParams}).pipe(takeUntil(this.destroy$)).subscribe((res)=>{
    if(showLoading) this.isLoad(false);
    this.subject.next(res);
  })
  return this.subject.asObservable();
}

execByBody(controller:any,router:any,data:any,showLoading:any = false) {
  if(showLoading) this.isLoad(true);
  this.http.post(environment.apiUrl+controller+'/'+router,data).pipe(takeUntil(this.destroy$)).subscribe((res)=>{
    if(showLoading) this.isLoad(false);
    this.subject.next(res);
  })
  return this.subject.asObservable();
}

isLoad(type:any = false){
  let loader = document.getElementById('loader');
  if (loader) {
    if (type) {
      loader.style.visibility = 'visible';
    }else{
      loader.style.visibility = 'hidden';
    }
  }
}
//#endregion Function
}
