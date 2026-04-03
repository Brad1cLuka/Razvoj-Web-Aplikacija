import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CartState, CartItem } from '../cart/store/cart.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
})
export class Checkout {
  items$: Observable<CartItem[]>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.items$ = this.store.select(state => state.cart.items);
  }

  getTotal(items: CartItem[]): number {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  submitOrder() {
    alert('Payment successful! 🎉');
  }
}