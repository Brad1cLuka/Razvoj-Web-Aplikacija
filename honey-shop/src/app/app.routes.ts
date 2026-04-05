import { Routes } from '@angular/router';
import { ProductList } from './features/products/product-list/product-list';
import { Home } from './features/home/home/home';
import { Checkout } from './features/checkout/checkout';
import { AboutUs } from './features/about-us/about-us';
import { Gallery } from './features/gallery/gallery';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
    { path: 'products', component: ProductList },
    { path: '', component: Home },
    { path: 'cart', loadComponent: () => import('./features/cart/cart/cart').then(m => m.Cart)},
    { path: 'checkout', component: Checkout },
    { path: 'about', component: AboutUs},
    { path: 'gallery', component: Gallery},
    { path: 'contact', component: Contact}
];
