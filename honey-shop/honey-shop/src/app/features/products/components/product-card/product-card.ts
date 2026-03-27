import { Component, Input } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss'],
})
export class ProductCard {
  @Input() product!: Product;
}
