import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SigninPageComponent } from './signin-page/signin-page/signin-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'signin',
    component: SigninPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
