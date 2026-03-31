import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Med bagrem', description: 'Kvalitetan med bagrem', price: 10, image: 'assets/products/med1.jpg', weight: 500, category: 'bagrem' },
    { id: 2, name: 'Med livada', description: 'Ukusan med livada', price: 12, image: 'assets/products/med2.jpg', weight: 500, category: 'livada' },
    { id: 3, name: 'Med sumski', description: 'Kvalitetan sumski med', price: 10, image: 'assets/products/med1.jpg', weight: 500, category: 'sumski' },
    { id: 4, name: 'Med suncokret', description: 'Ukusan suncokretov med', price: 12, image: 'assets/products/med2.jpg', weight: 500, category: 'suncokret' },
  
  ];


  constructor(){}


  getProducts(): Product[] {
    return this.products;
  }
}
