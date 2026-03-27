import { Injectable } from '@angular/core';

import { Product } from '../../shared/models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Bagremov med', description: 'Prirodni med', price: 10, image: 'bagrem.jpg', weight: '500g', category: 'bagrem' },
    { id: 2, name: 'Livadski med', description: 'Delikatesni med', price: 12, image: 'livadski.jpg', weight: '500g', category: 'livadski' }

  ];

  constructor(){}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
