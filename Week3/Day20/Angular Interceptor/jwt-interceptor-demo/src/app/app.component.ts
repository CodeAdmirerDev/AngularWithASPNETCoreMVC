import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Data from API</h1>
    <pre>{{ data | json }}</pre>
  `,
  standalone:false
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Just for testing, let's save a fake token
    localStorage.setItem('token', 'fake-jwt-token');

    this.apiService.getData().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}
