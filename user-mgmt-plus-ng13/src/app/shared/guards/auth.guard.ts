import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // check whether the user is auth or not.. 
    if(this.authService.isAuthenticated()){
      return true;
    }else{
      // else redirect to login page and return false;
      // setting the redirect
      this.router.navigate(['login'], {queryParams: { redirectTo: state.url }});
      return false;
    }
  }
  
}
