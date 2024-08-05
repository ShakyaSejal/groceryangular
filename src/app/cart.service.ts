
// src/app/cart.service.ts
import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
    console.log(`${product.name} added to cart`);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}
