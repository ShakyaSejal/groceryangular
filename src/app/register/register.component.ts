import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userName: string = ''; //this value is retrieve from frontend input field
  email: string= ''; 
  password: string = '';  
  confirmPassword: string = ''; 

  constructor(private router: Router) {}

  onRegister(){
    // Check if all fields are filled
    if (!this.userName || !this.email || !this.password || !this.confirmPassword) {
      alert('Please fill out all fields.');
      return;
    }

    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Create credentials object
    const credentials = {
      userName: this.userName,
      email: this.email,
      password: this.password
    };


    // Store credentials in local storage
    localStorage.setItem('userCredentials', JSON.stringify(credentials));
    
    // Provide feedback and navigate to login
    alert('Registration successful!');
    this.router.navigate(['/login']);
  }
}


 
