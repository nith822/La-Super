import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product/product';
import { ProductService } from '../../../product/product.service'

@Component({
  selector: 'app-primary-product-page',
  templateUrl: './primary-product-page.component.html',
  styleUrls: ['./primary-product-page.component.css']
})
export class PrimaryProductPageComponent implements OnInit {
	
	products: Product[] = [];
	
	constructor(productService: ProductService) { 
		productService.getProducts().subscribe(products => {
			this.products = products;
		});
	}

	ngOnInit() {
	}

}
