import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SignupPageComponent } from './signup-page/signup-page/signup-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationServiceComponent } from '../notification-service/notification-service/notification-service.component';
import { ApiComponent } from '../api/api/api.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot({
      mode: 'ios',
      //animated:false
    })
  ],
  declarations: [HomePage,SignupPageComponent,NotificationServiceComponent,ApiComponent],
  providers : [NotificationServiceComponent,ApiComponent]
})
export class HomePageModule {}
