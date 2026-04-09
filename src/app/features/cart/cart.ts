import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../core/services/cart';
import { Observable } from 'rxjs';
import { CartItem } from '../../core/models/cart-item';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, ButtonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<CartItem[]>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$;
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  increaseQuantity(productId: number): void {
    this.cartService.increaseQuantity(productId);
  }

  decreaseQuantity(productId: number): void {
    this.cartService.decreaseQuantity(productId);
  }

  getCartTotal(): number {
    return this.cartService.getCartTotal();
  }
}
