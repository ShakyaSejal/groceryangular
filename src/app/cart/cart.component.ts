import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FruitComponent } from '../fruit/fruit.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,NgIf,FruitComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
  