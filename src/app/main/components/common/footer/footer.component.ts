import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../header/header.component.css', './footer.component.css']
})
export class FooterComponent implements OnInit {

	urls: string[] = ['contact'];
	public location: string = "1201 E Parker Rd #101, Plano, TX 75074"
	public phone_number: string = "(972)422-2592";
	
	public sample_text: string = "The brown fox jumped over the lazy dog."
	public sample_hours: string = "10-10:30";
	
	constructor(private router: Router) { }
	
	navigateTo(option: number): void {
		this.router.navigateByUrl(this.urls[option]);
	}
	
	ngOnInit() {
	}

}
