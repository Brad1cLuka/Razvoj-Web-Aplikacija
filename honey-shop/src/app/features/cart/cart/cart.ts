import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import { CartState } from '../store/cart.state';
import { removeProduct } from '../store/cart.actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  products$: Observable<Product[]>;

  constructor(private store: Store<{ cart: CartState}>){
    this.products$ = this.store.select(state => state.cart.products);
  }

  remove( id: number){
    this.store.dispatch(removeProduct({productId: id}));
  }

  getTotal(products: Product[]): number{
    return products.reduce((sum,p) => sum+ p.price, 0);
  }
}
