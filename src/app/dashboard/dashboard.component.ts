import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name: string | null = '';
  email: string | null = '';
  phone: string | null = '';
  address: string | null = '';
  role: string | null = '';
  selectedStudent: any = null;
  students: any = [];
  selectedStudentId: number | null = null;


  constructor(private http: HttpClient) {}

ngOnInit() {
  this.name = localStorage.getItem('name');
  this.email = localStorage.getItem('email');
  this.phone = localStorage.getItem('phone');
  this.address = localStorage.getItem('address');
  this.role = localStorage.getItem('role');

  const token = localStorage.getItem('token');
  if (token) {
    this.http.get<any>('http://127.0.0.1:8000/api/students', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (res) => {
        this.students = res;
      },
      error: () => {
        alert('Failed to load student list.');
      }
    });
  }
}

  logout() {
    localStorage.clear();
    location.href = '/';
  }

  viewStudent(id: number) {
    const token = localStorage.getItem('token');
    this.http.get<any>('http://127.0.0.1:8000/api/students/' + id, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (res) => {
        this.selectedStudent = res;
      },
      error: () => {
        alert('Failed to fetch student details.');
      }
    });
  }
}
