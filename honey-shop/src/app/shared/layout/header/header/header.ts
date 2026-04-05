import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { CartState } from '../../../../features/cart/store/cart.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  cartCount$: Observable<number>;

  constructor(private store: Store<{ cart: CartState}>){
    this.cartCount$ = this.store.select(state=> state.cart.items).pipe(
      map(items => items.reduce((sum, item) => sum + item.quantity, 0))
    )
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
