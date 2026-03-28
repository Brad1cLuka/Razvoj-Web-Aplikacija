import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './app/features/cart/store/cart.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideStore({ cart: cartReducer}),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false
    }),
    provideRouter(routes)
  ]

});
