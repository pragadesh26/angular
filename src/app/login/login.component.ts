import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="text-align: center; padding: 40px;">
      <h2 style="color: green;">Login Form</h2>
      <input [(ngModel)]="name" placeholder="Name" style="padding: 10px;"><br><br>
      <input [(ngModel)]="email" placeholder="Email" style="padding: 10px;"><br><br>
      <input [(ngModel)]="password" type="password" placeholder="Password" style="padding: 10px;"><br><br>
      <button (click)="login()" style="padding: 10px 30px; background: green; color: white;">Login</button>
    </div>
  `
})
export class LoginComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

 login() {
  if (this.name && this.email && this.password) {
    // Store name and email in localStorage
    localStorage.setItem('name', this.name);
    localStorage.setItem('email', this.email);

    // Navigate to dashboard
    this.router.navigate(['/dashboard']);
  } else {
    alert('Enter name, email and password');
  }
}

}
