import { Injectable } from '@angular/core';  
import { CanMatch, Route, UrlSegment, Router } from '@angular/router';  
import { AuthService } from '../services/auth.service';

@Injectable({  
  providedIn: 'root',  
})  
export class CanMatchGuard implements CanMatch {  
  constructor(private authService: AuthService, private router: Router) {}  

  canMatch(route: Route, segments: UrlSegment[]): boolean {  
    if (this.authService.isAuthenticated()) {  
      return true;  
    }  
    this.router.navigate(['/login']);  
    return false;  
  }  
}  