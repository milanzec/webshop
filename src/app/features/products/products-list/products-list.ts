import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';
import { ProductService } from '../../../core/services/product';
import { Product } from '../../../core/models/product';
import { CartService } from '../../../core/services/cart';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, RouterLink, CardModule, ButtonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
})
export class ProductsList {
  products$!: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
