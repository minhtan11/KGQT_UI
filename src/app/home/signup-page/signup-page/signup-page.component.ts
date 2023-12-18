import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { AppService } from 'src/app/service/appservice.service';
import Swal from 'sweetalert2'
import { NotificationServiceComponent } from 'src/app/notification-service/notification-service/notification-service.component';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPageComponent  implements OnInit,AfterViewInit {

  //#region Constructor
  @ViewChild('modal') modal: any;
  formGroup!: FormGroup;
  showPass:any = false;
  canDismiss:any = false;
  isError:any = false;
  isSignUp:any = false;
  messageError:any = '';
  image:any;
  formSetup:any = [];
  private destroy$ = new Subject<void>();
  constructor(
    private formBuilder: FormBuilder,
    private http : HttpClient,
    private router: Router,
    private appService:AppService,
    private notification : NotificationServiceComponent,
    private dt : ChangeDetectorRef
  ) { 
    this.formSetup = [
      {
        field:'firstName',
        headerText:'Họ'
      },
      {
        field:'lastName',
        headerText:'Tên'
      },
      {
        field:'gender',
        headerText:'Giới tính'
      },
      {
        field:'phone',
        headerText:'Số điện thoại'
      },
      {
        field:'birthDay',
        headerText:'Ngày sinh'
      },
      {
        field:'email',
        headerText:'Email'
      },
      {
        field:'address',
        headerText:'Địa chỉ'
      },
      {
        field:'userName',
        headerText:'Tài khoản'
      },
      {
        field:'passWord',
        headerText:'Mật khẩu'
      },
    ]
  }
  //#endregion Constructor

  //#region Init
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.email],
      address: ['', Validators.required],
      userName: ['', Validators.required],
      passWord: ['', Validators.required],
      birthDay: [new Date().toISOString().substring(0, 10),[]],
      base64String : [''],
      fileName:['']
    });
  }

  async ngAfterViewInit() {
  }

  ngOnDestroy() {
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

  onDismiss(){
    this.canDismiss = true;
    this.modal.dismiss();
  }

  onOpenDate(){
    this.canDismiss = false;
  }

  onDismissError(){
    this.isError = false;
    this.messageError = '';
    this.isSignUp = false;
  }

  goSignInPage(){
    this.router.navigate(['home']);
  }

  async onSignUp(){
    let validate = this.appService.validation(this.formGroup,this.formSetup);
    if(validate) return;
    let fileName = Date.now() + this.formGroup.value.userName+'.'+this.image?.format;
    this.formGroup.patchValue({base64String:this.image?.base64String});
    this.formGroup.patchValue({fileName:fileName});
    this.http.post(environment.apiUrl+'Authencation/register',this.formGroup.value).pipe(takeUntil(this.destroy$)).subscribe((res:any)=>{
      if (res && !res?.isError) {
        
      }else{
        this.notification.showNotiError('Lỗi!',res?.message);
      }
    })
  }

  async uploadImage(){
    this.image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Base64,
    });
    this.dt.detectChanges();
  }
  //#endregion Function  

}
