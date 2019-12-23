import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/*
	const routes: Routes = [ { path: '', component: FrontPageComponent },
						 { path: 'products', component: PrimaryProductPageComponent } ];
*/
 
const routes: Routes = [ 
	{ path: '', 
		loadChildren: () => import('./main/components/pages/front-page/front-page.module').then(m => m.FrontPageModule) 
	},
	
	{ path: 'products', 
		loadChildren: () => import('./main/components/pages/primary-product-page/primary-product-page.module').then(m => m.PrimaryProductPageModule) 
	},				 
	{ path: 'contact', 
		loadChildren: () => import('./main/components/pages/contact-page/contact-page.module').then(m => m.ContactPageModule) 
	},
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	},
	
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
