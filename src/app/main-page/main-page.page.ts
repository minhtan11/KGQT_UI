import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPagePage implements OnInit,AfterViewInit {
  private destroy$ = new Subject<void>();
  constructor(
    private dt : ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
