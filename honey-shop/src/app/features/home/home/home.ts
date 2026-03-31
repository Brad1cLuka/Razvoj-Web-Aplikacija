import { Component } from '@angular/core';
import { ProductList } from '../../products/product-list/product-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductList, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
