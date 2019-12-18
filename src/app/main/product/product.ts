//sample xml in ./src/assets

export class Product {
	
	
	name: string;
	description: string;
	
	names: string[];
	descriptions: string[];
	images: string[];
	price: number;
	
	constructor(language: number, names: string[], descriptions: string[], images: string[], price: number) { 
		this.names = names;
		this.descriptions = descriptions;
		this.images = images;
		this.price = price;
		
		if(names.length == 0 || names == null) {
			throw new Error('Names empty in product');
		}
		if(descriptions.length == 0 || descriptions == null) {
			throw new Error('Descriptions empty in product');
		}
		if(images.length == 0 || images == null) {
			throw new Error('Images empty in product');
		}
		if(price <= 0 || price == null) {
			throw new Error('Price null or negative');
		}
		
		this.updateLanguage(language);
	}
	
	updateLanguage(language: number): void {
		this.name = this.names[language];
		this.description = this.descriptions[language];
	}
}