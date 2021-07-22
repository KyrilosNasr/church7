import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private _account: AccountService,
    private _router: Router,
    private _jwt: JwtHelperService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const token = localStorage.getItem('token')
      if(token){
        let decoded = this._jwt.decodeToken(token)
        if(decoded.role == "superadmin" || decoded.role == "admin") return true;

        this._router.navigate(['/login'])
        return false
      }

      return false
  }

}
