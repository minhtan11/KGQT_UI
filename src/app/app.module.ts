import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NotificationServiceComponent } from './notification-service/notification-service/notification-service.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,IonicModule.forRoot({
    mode: 'ios',
    //animated:false
  }), AppRoutingModule,HttpClientModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },NotificationServiceComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
