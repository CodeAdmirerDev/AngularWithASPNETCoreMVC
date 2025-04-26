import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isLoggedIn =false;
  private userRole='';


  login(){
    this.isLoggedIn = true;
    this.userRole='user';
  }

  adminLogin(){
    this.isLoggedIn = true;
    this.userRole='admin';
  }

  logout(){
    this.isLoggedIn = false;
    this.userRole='';
  }

  isAuthenticated():boolean{

    return this.isLoggedIn;
  }

  userHasRole(userRole:string):boolean{

    alert(this.userRole);
    alert(userRole);
    return this.userRole === userRole;
  }

}
