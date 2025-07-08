import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name: string | null = '';
  email: string | null = '';

  ngOnInit() {
    // Get values from localStorage
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
  }

  logout() {
    localStorage.clear();      // Clear token and info
    location.href = '/';       // Redirect to login page
  }
}
