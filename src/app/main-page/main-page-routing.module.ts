import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPagePage } from './main-page.page';

const routes: Routes = [
  {
    path: '',
    component: MainPagePage,
    children:[
      {
        path: 'main-home',
        loadChildren: () => import('./main-home/main-home.module').then( m => m.MainHomePageModule)
      },
      {
        path: '',
        redirectTo: 'main-home',
        pathMatch: 'full'
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPagePageRoutingModule {}
