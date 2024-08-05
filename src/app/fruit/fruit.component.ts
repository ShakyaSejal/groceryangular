import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { fruit } from '../../assets/data';
import { Router, RouterModule } from '@angular/router';
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

  fruits = [];

  constructor(private path: Router){}

  ngOnInit() {
    this.storeFruitData();
    // this.loadFruitData();
  }

  storeFruitData() {
    localStorage.setItem('fruitData', JSON.stringify(fruit));
  }

  view(id: string){
    this.path.navigate(['/cart',id])
  }

  add(){
    const user = localStorage.getItem('userCredentials')
    if(user){
      this.path.navigate(['/cart'])
    }
    else{
      this.path.navigate(['/login'])
    }
  }

}
