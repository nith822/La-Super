import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { Product } from './product';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
	
	readonly primaryProductXML: string = "./assets/sample.xml";
		
	constructor(private http: HttpClient) { 
	}
  
	getProducts(): Observable<Product[]> {
		var products: Product[] = [];
		this.loadXML(this.primaryProductXML).subscribe(data => {
			var parser: DOMParser = new DOMParser();
			
			//https://www.javascripture.com/Document
			var xmlDoc = parser.parseFromString(data, "text/xml");
			
			//https://www.javascripture.com/HTMLCollection
			var xmlNodes: HTMLCollectionOf<Element> = xmlDoc.getElementsByTagName("product");
			
			for(var i = 0; i < xmlNodes.length; i++) {
				//https://www.javascripture.com/NodeList
				var nodeList: HTMLCollectionOf<Element> = xmlNodes.item(i).children;
				var nodeChilds: string[] = [];
				for (var j = 0; j < nodeList.length; j++) {
					nodeChilds.push(nodeList.item(j).innerHTML);
				}
				products.push(this.parseProduct(nodeChilds));
			}
		});
		return of(products);
	}
	
	parseProduct(nodeChilds: string[]): Product {
		if(nodeChilds.length < 4) {
			throw new Error('Error with product parsing');
		}
		
		var default_language = 0;
		var names: string[] = nodeChilds[0].split(",");
		var descriptions: string[]= nodeChilds[1].split(",");
		var images: string[] = nodeChilds[2].split(",");
		var price: number = parseFloat(nodeChilds[3]);
		
		return new Product(default_language, names, descriptions, images, price);
	}
	
	loadXML(XMLFile: string): Observable<string> {
		const _headers = new HttpHeaders();
		const headers = _headers.set('Content-Type', 'text/xml');
		return this.http.get(XMLFile,{headers: _headers, responseType: 'text'});
	}
}
