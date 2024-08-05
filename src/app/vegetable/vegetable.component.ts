import { Component } from '@angular/core';
import { vegetable } from '../../assets/data';
import {  RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-vegetable',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FooterComponent,CartComponent],
  templateUrl: './vegetable.component.html',
  styleUrl: './vegetable.component.css'
})
export class VegetableComponent {
   vegetable=vegetable
}

