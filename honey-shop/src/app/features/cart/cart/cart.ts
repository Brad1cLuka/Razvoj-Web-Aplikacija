import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import { CartState, CartItem } from '../store/cart.state';
import { removeProduct } from '../store/cart.actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  items$: Observable<CartItem[]>;

  constructor(private store: Store<{ cart: CartState}>){
    this.items$ = this.store.select(state => state.cart.items);
  }

  remove( id: number){
    this.store.dispatch(removeProduct({productId: id}));
  }

  getTotal(items: CartItem[]): number{
    return items.reduce((sum, item) => sum+ item.product.price * item.quantity, 0);
  }
}
