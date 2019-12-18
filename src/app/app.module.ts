import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './main/components/common/product/product.component';
import { HeaderComponent } from './main/components/common/header/header.component';
import { FooterComponent } from './main/components/common/footer/footer.component';

import { FrontPageComponent } from './main/components/pages/front-page/front-page.component';
import { PrimaryProductPageComponent } from './main/components/pages/primary-product-page/primary-product-page.component';

import { ProductService } from './main/product/product.service';
import { ResponsiveService } from './main/responsive/responsive.service';
import { StatisticService } from './main/statistic/statistic.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent, 
    FrontPageComponent,
    FooterComponent,
    PrimaryProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
  ],
  providers: [ProductService, ResponsiveService, StatisticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
