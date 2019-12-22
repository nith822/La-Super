import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryProductPageRoutingModule } from './primary-product-page-routing.module';
import { PrimaryProductPageComponent } from './primary-product-page.component';
import { SharedModule } from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PrimaryProductPageRoutingModule,
	SharedModule
  ],
  declarations: [PrimaryProductPageComponent]
})
export class PrimaryProductPageModule { }