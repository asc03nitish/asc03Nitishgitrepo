// // import { Injectable } from "@angular/core";
// // import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
// // @Injectable({
// //     providedIn: 'root',

// // })
// // export class AuthGuardService implements CanActivate {
// //     constructor(private router: Router) { }
// //     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
// //         if (sessionStorage.getItem('emailid') === "yes") {
// //             return true;
// //         }
// //         else {
// //             this.router.navigate(['/login']);
// //             return false;
// //         }

// //     }
// // }
// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuardService implements CanActivate {
//   constructor(private router: Router) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     // Check if the session contains a valid 'emailid' key to indicate that the user is logged in
//     const isLoggedIn = sessionStorage.getItem('emailid') === "yes";
    
//     if (isLoggedIn) {
//       // If the user is logged in, grant access to the route
//       return true;
//     } else {
//       // If not logged in, redirect to the login page
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
  
// }
