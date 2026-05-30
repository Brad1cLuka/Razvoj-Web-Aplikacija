import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Bagremov med', description: '100% prirodni bagremov med', price: 10, image: 'assets/products/placeholder1.png', weight: 500, category: 'bagrem' },
    { id: 2, name: 'Livadski med', description: '100% prirodni livadski med', price: 10, image: 'assets/products/placeholder2.png', weight: 500, category: 'sumski' },
    { id: 3, name: 'Šumski med', description: '100% prirodni šumski med', price: 10, image: 'assets/products/placeholder3.png', weight: 500, category: 'livadski' },
    { id: 4, name: 'Bagremov med', description: '100% prirodni bagremov med', price: 10, image: 'assets/products/placeholder1.png', weight: 500, category: 'bagrem' },
  ];


  constructor(){}


  getProducts(): Product[] {
    return this.products;
  }
}
