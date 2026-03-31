import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../../core/services/product';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addProduct } from '../../cart/store/cart.actions';
import { CartState } from '../../cart/store/cart.state';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {

  products: Product[] =[];

  constructor(private productService: ProductService, private store: Store<{ cart: CartState}>) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  console.log('Products loaded:', this.products);
    console.log(this.products);
  }

  handleAddToCart(product: Product) {
    this.store.dispatch(addProduct({ product }));
  }
}
