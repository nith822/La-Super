import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './main/components/common/shared.module';

import { ProductService } from './main/product/product.service';
import { ResponsiveService } from './main/responsive/responsive.service';
import { StatisticService } from './main/statistic/statistic.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	SharedModule,
  ],
  providers: [ProductService, ResponsiveService, StatisticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
