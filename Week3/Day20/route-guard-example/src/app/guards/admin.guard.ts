import { ActivatedRouteSnapshot, CanActivateChild, CanActivateChildFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class AdminGuard implements CanActivateChild{


  constructor(private authService:AuthService, private router:Router){}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    if(this.authService.isAuthenticated() && this.authService.userHasRole('admin')){
      return true;
    }
    else{

      this.router.navigate(['/']);
      return false;
    }

  }

}
