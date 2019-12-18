import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductComponent } from '../product/product.component'; 

@Component({
  selector: 'front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
