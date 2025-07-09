import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private http:HttpClient,private router: Router) {}

 login() {
  console.log('Login button clicked'); // ✅ Add this
  const payload = {
    email: this.email,
    password: this.password
  };

  this.http.post<any>('http://127.0.0.1:8000/api/login', payload).subscribe({
    next: (res) => {
      console.log('Login success:', res); // ✅ Log response
      localStorage.setItem('token', res.token);
      localStorage.setItem('name', res.user.name);
      localStorage.setItem('email', res.user.email);
      this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      console.error('Login error:', err); // ✅ Log error
      alert('Login failed. Check credentials.');
    }
  });
}


}
