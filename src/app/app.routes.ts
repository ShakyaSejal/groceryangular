import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { FruitComponent } from './fruit/fruit.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'category',
        component:CategoryComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'fruit',
        component:FruitComponent
    },
    {
        path:'vegetable',
        component:VegetableComponent
    },
    {
        path:'cart',
        component:CartComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path: 'home',
        component: NavbarComponent,
        children: [
          {
            path: '',
            component: HomeComponent,
          }
        ]
      }


];

