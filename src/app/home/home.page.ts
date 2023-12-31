import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'
import { NotificationServiceComponent } from '../notification-service/notification-service/notification-service.component';
import { ApiComponent } from '../api/api/api.component';
import { Subject } from 'rxjs';
import { Keyboard } from '@capacitor/keyboard';
import { NavController } from '@ionic/angular';

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
  isHideFooter:any=false;
  private destroy$ = new Subject<void>();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dt : ChangeDetectorRef,
    private notification : NotificationServiceComponent,
    private api : ApiComponent,
    private http : HttpClient,
    private navCtrl: NavController
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
    Keyboard.addListener('keyboardWillShow', info => {
      this.isHideFooter = true;
      this.dt.detectChanges();
    });

    Keyboard.addListener('keyboardWillHide', () => {
      this.isHideFooter = false;
      this.dt.detectChanges();
    });

    this.dt.detectChanges();
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
    this.onDestroy();
    //this.router.navigate(['main-page'],{});
    this.navCtrl.navigateForward('main-page', { animated: false });
    // if (this.formGroup.invalid) {
    //   this.notification.showNotiError('','Tài khoản và mật khẩu không được phép để trống!',true);
    //   return;
    // }
    // let queryParams = new HttpParams();
    // queryParams = queryParams.append("userName",this.formGroup.value?.userName);
    // queryParams = queryParams.append("passWord",this.formGroup.value?.passWord);
    // this.api.execByParameter('Authencation','login',queryParams,true).subscribe((res:any)=>{
    //   if (res && !res?.isError) {
        
    //   }else{
    //     this.notification.showNotiError('',res?.message,true);
    //   }
    // })
  }
  /**
   * *Function go to SignUp Page
   */
  goSignUpPage(){
    this.router.navigate(['home/signup']);
  }
  //#endregion Function
}
