import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fruit } from '../../assets/data';
import { RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [CommonModule,RouterModule ,CartComponent, FooterComponent],
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.css'
})
export class FruitComponent {
  fruit=fruit

}
