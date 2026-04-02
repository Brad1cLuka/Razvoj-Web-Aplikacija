import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Acacia Honey', description: 'High-quality acacia honey', price: 10, image: 'assets/products/placeholder.png', weight: 500, category: 'acacia' },
    { id: 2, name: 'Acacia Honey', description: 'High-quality acacia honey', price: 10, image: 'assets/products/placeholder.png', weight: 500, category: 'acacia' },
    { id: 3, name: 'Acacia Honey', description: 'High-quality acacia honey', price: 10, image: 'assets/products/placeholder.png', weight: 500, category: 'acacia' },
    { id: 4, name: 'Acacia Honey', description: 'High-quality acacia honey', price: 10, image: 'assets/products/placeholder.png', weight: 500, category: 'acacia' },
  ];


  constructor(){}


  getProducts(): Product[] {
    return this.products;
  }
}
