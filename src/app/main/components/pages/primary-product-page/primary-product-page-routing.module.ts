import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimaryProductPageComponent } from './primary-product-page.component';


const routes: Routes = [
  {
    path: '',
    component: PrimaryProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimaryProductPageRoutingModule { }