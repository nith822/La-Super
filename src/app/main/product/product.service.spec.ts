import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule} from '@angular/common/http';
import { ProductService } from './product.service';
import { Product } from './product';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({
	  imports: [HttpClientTestingModule], 
      providers: [ProductService]
  }));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });  
  
  it('should create an array of valid products', () => {
	const service: ProductService = TestBed.get(ProductService);
	var products: Product [] = service.getProducts();
	for(let product of products) {
		console.log(product.toString());
	}
	expect(service.getProducts().length).toEqual(2);
  });
  
});
