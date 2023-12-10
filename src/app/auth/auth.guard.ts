// import { Inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from './auth.service';

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

// export const authGuard: CanActivateFn = (next, state) => {

//   if(Inject(AuthService).isLoggedIn()) {
//     return true;
//   }
//   return Inject(Router).parseUrl('/');
// };

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {


  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean  {

    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(
      childRoute: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }


  checkLogin(url: string): boolean {

    if(this.authService.isLoggedIn) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Redirect to the login page
    this.router.navigate(['/login']);
    return false
  }

}
