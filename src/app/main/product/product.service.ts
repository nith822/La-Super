import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
	
	readonly primaryProductXML: string = "./assets/sample.xml";
		
	constructor(private http: HttpClient) { 
		this.getProducts();
	}
  
	getProducts(): void {
		this.loadXML(this.primaryProductXML).subscribe(data => {
			console.log(data);
			var parser: DOMParser = new DOMParser();
			
			//https://www.javascripture.com/Document
			var xmlDoc = parser.parseFromString(data, "text/xml");
			console.log(xmlDoc.getElementsByTagName("product")[0]);
			
			//https://www.javascripture.com/HTMLCollection
			var xmlNodes: HTMLCollectionOf<Element> = xmlDoc.getElementsByTagName("product");
			
			console.log(xmlNodes.item(0).childNodes);
			//https://www.javascripture.com/NodeList
			var nodeList: HTMLCollectionOf<Element> = xmlNodes.item(0).children;
			for (var i = 0; i < nodeList.length; i++) {
				console.log(nodeList.item(i).innerHTML);
			}
		});
	}
	
	loadXML(XMLFile: string): Observable<string> {
		const _headers = new HttpHeaders();
		const headers = _headers.set('Content-Type', 'text/xml');
		return this.http.get(XMLFile,{headers: _headers, responseType: 'text'});
	}
}
