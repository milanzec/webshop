import { Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart';
import { ProductsList } from './features/products/products-list/products-list';
import { Home } from './features/home/home';
import { ProductDetails } from './features/products/product-details/product-details';

export const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'products',
    component: ProductsList,
  },
  {
    path: '',
    component: Home,
  },
  {
    path: 'products/:id',
    component: ProductDetails,
  },
];
