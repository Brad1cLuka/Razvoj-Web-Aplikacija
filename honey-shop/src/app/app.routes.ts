import { Routes } from '@angular/router';
import { ProductList } from './features/products/product-list/product-list';
import { Home } from './features/home/home/home';
import { Checkout } from './features/checkout/checkout';

export const routes: Routes = [
    //{ path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductList },
    { path: '', component: Home },
    { path: 'cart', loadComponent: () => import('./features/cart/cart/cart').then(m => m.Cart)},
    { path: 'checkout', component: Checkout }

    /*{ path: 'cart', loadComponent: () => import('./features/cart/cart').then(m => m.Cart)},
    { path: 'about', loadComponent: () => import('./features/about/about').then(m => m.About)},
    { path: 'contact', loadComponent: () => import('./features/contact/contact').then(m => m.Contact)},*/
];
