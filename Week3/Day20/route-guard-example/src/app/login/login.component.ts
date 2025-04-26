import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService:AuthService, private router:Router){

  }

  login(){

    this.authService.login();
    this.router.navigate(['/home'])
  }

  adminLogin(){
    this.authService.adminLogin();
    this.router.navigate(['admin']);
  }
}
