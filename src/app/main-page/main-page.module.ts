import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPagePageRoutingModule } from './main-page-routing.module';

import { MainPagePage } from './main-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot({
      mode: 'ios',
      //animated:false
    }),
    MainPagePageRoutingModule
  ],
  declarations: [MainPagePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainPagePageModule {}
