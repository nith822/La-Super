import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './main/components/pages/front-page/front-page.component';
import { PrimaryProductPageComponent } from './main/components/pages/primary-product-page/primary-product-page.component';


const routes: Routes = [ { path: '', component: FrontPageComponent },
						 { path: 'products', component: PrimaryProductPageComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
