import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'
import { NotificationServiceComponent } from '../notification-service/notification-service/notification-service.component';
import { ApiComponent } from '../api/api/api.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit,AfterViewInit,OnDestroy {
  //#region Constructor
  showPass:any = false;
  isSignUp:any = false;
  isError:any = false;
  messageError:any;
  formGroup!: FormGroup;
  private destroy$ = new Subject<void>();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dt : ChangeDetectorRef,
    private notification : NotificationServiceComponent,
    private api : ApiComponent,
    private http : HttpClient,
  ) {}
  //#endregion Constructor

  //#region Init
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }

  onDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }
  //#endregion Init

  //#region Event
  //#endregion Event

  //#region Function

  showPassword(){
    this.showPass = !this.showPass;
  }

  onSignUp(){
    this.isSignUp = true;
  }

  onSignIn(){
    if (this.formGroup.invalid) {
      this.notification.showNotiError('Lỗi!','Tài khoản và mật khẩu không được phép để trống! Vui lòng nhập lại');
      return;
    }
    let queryParams = new HttpParams();
    queryParams = queryParams.append("userName",this.formGroup.value?.userName);
    queryParams = queryParams.append("passWord",this.formGroup.value?.passWord);
    // this.api.execByParameter('Authencation','login',queryParams,true).subscribe((res:any)=>{
    //   if (res && !res?.isError) {
        
    //   }else{
    //     this.notification.showNotiError('Lỗi!',res?.message);
    //   }
    // })
    this.http.get(environment.apiUrl+'Authencation/login',{params:queryParams}).subscribe((res)=>{
      this.router.navigate(['home/signup']);
    })
  }
  /**
   * *Function go to SignUp Page
   */
  goSignUpPage(){
    this.router.navigate(['home/signup']);
  }
  //#endregion Function
}
