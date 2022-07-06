import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const AuthUser = localStorage.getItem('AuthUser');
      if (AuthUser == null) {
        this.router.navigateByUrl('/login')
        return false;
      }
      else {
      const expire=this.isExpiredToken(AuthUser);
      if(expire){
        localStorage.removeItem('AuthUser')
        this.router.navigateByUrl('/login');
        return false;
      } else{
        return true;
      }
      }
    }

 isExpiredToken(AuthUser: string):boolean {
  let decoded:any= jwt_decode(AuthUser);
  return Math.floor(new Date().getTime()/1000)>=decoded.exp
}
}
