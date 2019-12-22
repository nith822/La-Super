import { NgModule } from '@angular/core';

import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ 
	ProductComponent,
	HeaderComponent,
	FooterComponent,
  ],
  exports: [ ProductComponent,
	HeaderComponent,
	FooterComponent,
  ]
})
export class SharedModule {}