import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../common/shared.module';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './front-page.component';

@NgModule({
  imports: [
    CommonModule,
    FrontPageRoutingModule,
	SharedModule,
  ],
  declarations: [FrontPageComponent]
})
export class FrontPageModule { }