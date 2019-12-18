import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product/product.service';
	
@Component({
  selector: 'front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(private productService: ProductService) { 
  
  }

  ngOnInit() {
  }

}
