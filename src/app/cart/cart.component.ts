import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NgIf, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  fruitData: any[] = [];
  subtotal: number = 0;
  deliveryFee: number = 50;
  promoDiscount: number = 0;
  total: number = 0;
  promoCode: string = '';

  ngOnInit() {
    this.loadFruitData();
  }

  loadFruitData() {
    const data = localStorage.getItem('fruitData');
    if (data) {
      this.fruitData = JSON.parse(data);
      // Initialize quantity for each item if not already set
      this.fruitData.forEach(item => item.quantity = item.quantity || 1);
      this.calculateTotals();
    }
  }

  updateQuantity(item: any) {
    item.total = item.price * item.quantity;
    this.calculateTotals();
    this.saveToLocalStorage();
  }

  removeItem(id: string) {
    this.fruitData = this.fruitData.filter(item => item.id !== id);
    this.calculateTotals();
    this.saveToLocalStorage();
  }

  calculateTotals() {
    this.subtotal = this.fruitData.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    this.total = this.subtotal + this.deliveryFee - this.promoDiscount;
  }

  saveToLocalStorage() {
    localStorage.setItem('fruitData', JSON.stringify(this.fruitData));
  }

  goPay() {
    // Implement payment logic
  }

  applyPromoCode() {
    // Implement promo code logic
    // Example: if promoCode === 'DISCOUNT10' this.promoDiscount = 10;
    this.calculateTotals();
  }
}
