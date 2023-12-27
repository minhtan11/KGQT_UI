import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SignupPageComponent } from './signup-page/signup-page/signup-page.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { MainPageHomeComponent } from './main-page/main-page/main-page-home/main-page-home/main-page-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'signup',
    component: SignupPageComponent,
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: "home",
        component: MainPageHomeComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
