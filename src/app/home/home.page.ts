import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninPageComponent } from './signin-page/signin-page/signin-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,AfterViewInit {
  //#region Constructor
  constructor(
    private router: Router
  ) {}
  //#endregion Constructor

  //#region Init
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }
  //#endregion Init

  //#region Event
  //#endregion Event

  //#region Function
  goSignInPage(){
    this.router.navigate(['home/signin'])
    //this.component = ;
  }
  //#endregion Function
}