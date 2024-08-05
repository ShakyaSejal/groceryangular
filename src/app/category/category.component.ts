import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FruitComponent } from "../fruit/fruit.component";
import { CommonModule } from '@angular/common';
import { VegetableComponent } from '../vegetable/vegetable.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterModule, FruitComponent, VegetableComponent, CommonModule ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

}
