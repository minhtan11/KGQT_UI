import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.page.html',
  styleUrls: ['./main-home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHomePage implements OnInit,AfterViewInit {
  private destroy$ = new Subject<void>();
  isLoad:any = false;
  constructor(
    private dt : ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.isLoad = true;
    //   this.dt.detectChanges();
    // }, 400);
  }
}
