import { Routes } from '@angular/router';
import { Cart } from './features/cart/cart';
import { ProductsList } from './features/products/products-list/products-list';
import { Home } from './features/home/home';
import { ProductDetails } from './features/products/product-details/product-details';

export const routes: Routes = [
    {
        path:'cart',
        component:Cart
    },
    {
        path:'products',
        component:ProductsList
    },
    {
        path:'',
        component:Home
    },
    {
        path:'products/:id',
        component:ProductDetails
    }
];
