import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  email = '';
  password = '';
  loginSuccess = false;
  loggedInUser: any;

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('http://127.0.0.1:8000/api/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        this.loggedInUser = res.user;
        this.loginSuccess = true;
      },
      error: () => {
        this.loginSuccess = false;
      }
    });
  }
}
