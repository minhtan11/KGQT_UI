import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent  implements OnInit {
  //#region Constructor
  showPass:any = false;
  isSignUp:any = false;
  isError:any = false;
  messageError:any;
  formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  //#endregion Constructor

  //#region Init
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    
  }
  //#endregion Init

  showPassword(){
    this.showPass = !this.showPass;
  }

  onSignUp(){
    this.isSignUp = true;
  }

  onSignIn(){
    if (this.formGroup.invalid) {
      this.isError = true;
      this.messageError = 'Tài khoản và mật khẩu không được phép để trống! Vui lòng nhập lại' 
    }
  }

  didDismiss(){
    this.isError = false;
    this.messageError = '';
  }


}
