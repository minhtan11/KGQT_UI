import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPageComponent  implements OnInit {

  //#region Constructor
  @ViewChild('modal') modal: any;
  formGroup!: FormGroup;
  showPass:any = false;
  canDismiss:any = false;
  isError:any = false;
  isSignUp:any = false;
  messageError:any = '';
  alertButtons = [
    {
      text: 'Ok',
      cssClass: 'alert-button-ok',
    }
  ];
  private destroy$ = new Subject<void>();
  constructor(
    private formBuilder: FormBuilder,
    private http : HttpClient,
    private router: Router,
    private dt : ChangeDetectorRef
  ) { }
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
      birthDay: [new Date()]
    });
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

  onSignUp(){
    // this.isSignUp = true;
    // if (this.formGroup.invalid) {
    //   this.isError = true;
    //   this.messageError = 'Thông tin đăng ký không được để trống! Vui lòng nhập lại'
    //   return;
    // }
    this.http.post(environment.apiUrl+'Authencation/register',this.formGroup.value).pipe(takeUntil(this.destroy$)).subscribe((res:any)=>{
      console.log(res);
    })
  }
  //#endregion Function  

}
