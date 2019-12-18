import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResponsiveService } from './main/responsive/responsive.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './main/product/product.component';
import { HeaderComponent } from './main/header/header.component';
import { FrontPageComponent } from './main/front-page/front-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FrontPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ResponsiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
