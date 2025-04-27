import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  standalone:false
})
export class SecureComponent implements OnInit {
  data = '';

  constructor(private http: HttpClient, private authService:AuthService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.http.get<any>('https://localhost:7140/api/auth/secure-data', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe(res => {
      this.data = res.data;
    });
  }

  loout() {
   
    this.authService.logout();
  }
}
