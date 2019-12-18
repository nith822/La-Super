import { Component } from '@angular/core';
import { ResponsiveService } from './main/responsive/responsive.service';
import { FrontPageComponent } from './main/components/pages/front-page/front-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	public isMobile: Boolean;
	
	constructor(private responsiveService:ResponsiveService){
		
	}

	ngOnInit(){
		this.responsiveService.getMobileStatus().subscribe(isMobile =>{
			if(isMobile){
				console.log('Mobile device detected')
			}
			else {
				console.log('Desktop detected')
			}
			this.isMobile = isMobile;
		});
		this.onResize();    
	}

	onResize(){
		this.responsiveService.checkWidth();
	}
}
