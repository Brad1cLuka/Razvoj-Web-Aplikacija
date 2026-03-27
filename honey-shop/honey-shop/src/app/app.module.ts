import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ProductCard } from './features/products/components/product-card/product-card';
import { ProductList } from './features/products/components/product-list/product-list';

@NgModule({
  declarations: [
    App,
    ProductCard,
    ProductList
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }