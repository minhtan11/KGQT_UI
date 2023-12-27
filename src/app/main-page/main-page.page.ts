import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit,AfterViewInit {
  @ViewChild('myTab') myTab: IonTabs | undefined;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.myTab?.select('main-home');
  }
}
