import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule, CartComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    userName: '',
    password: '',
  };
constructor(private router: Router) {}

onLogin() {
  // Check credentials for admin
  if (this.loginObj.userName === 'admin' && this.loginObj.password === '334455') {
    this.router.navigateByUrl('/admin-home');
    return; // Exit the function after redirecting
  }

  // Retrieve stored credentials for regular users
  const userCredentials = localStorage.getItem('userCredentials');

  if (userCredentials) {
    const { userName: storedUserName, password: storedPassword } = JSON.parse(userCredentials);

    // Check if the credentials match user credentials
    if (this.loginObj.userName === storedUserName && this.loginObj.password === storedPassword) {
      this.router.navigateByUrl('/cart');
      return; // Exit the function after redirecting
    }
  }

  // If no match is found
  alert('Wrong credentials');
}
}