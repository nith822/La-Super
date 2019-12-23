import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	urls: string[] = ['','products','contact'];
	constructor(private router: Router) { }
	
	navigateTo(option: number): void {
		this.router.navigateByUrl(this.urls[option]);
	}
  
	ngOnInit() {
	}

}
