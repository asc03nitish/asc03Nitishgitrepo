import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
@Injectable({
    providedIn: 'root',

})
export class AuthGuardService implements CanActivate {

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
 
  login(): void {
    localStorage.setItem('isLoggedIn', 'true');
  }
 

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }
 
 
 
    constructor(private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
    {
      if(sessionStorage.getItem('loggedIn')=='yes'){
        return true;
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }
   
    }
 
   
}