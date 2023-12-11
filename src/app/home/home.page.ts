import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit,AfterViewInit {
  //#region Constructor
  showPass:any = false;
  isSignUp:any = false;
  isError:any = false;
  messageError:any;
  formGroup!: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dt : ChangeDetectorRef
  ) {}
  //#endregion Constructor

  //#region Init
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      passWord: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    
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
      Swal.fire({
        icon: "error",
        title: "Lỗi!",
        text: "Tài khoản và mật khẩu không được phép để trống! Vui lòng nhập lại",
        heightAuto: false
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Đăng nhập thành công",
      text: "",
      heightAuto: false
    }).then((res:any)=>{
      console.log(res);
    })
  }

  didDismiss(){
    this.isError = false;
    this.messageError = '';
  }

  /**
   * *Function go to SignUp Page
   */
  goSignUpPage(){
    this.router.navigate(['home/signup']);
  }
  //#endregion Function
}
