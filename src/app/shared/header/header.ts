import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../core/services/cart';
import { Observable, map } from 'rxjs';
import { CartItem } from '../../core/models/cart-item';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, ButtonModule, AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  cartCount$!: Observable<any>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartCount$ = this.cartService.cartItems$.pipe(
      map((items) => items.reduce((sum, item) => sum + item.quantity, 0)),
    );
  }
}
