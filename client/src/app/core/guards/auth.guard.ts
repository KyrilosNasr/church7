import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuth: boolean
  constructor(
    private _account: AccountService,
    private _router: Router,
    private _jwt: JwtHelperService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const token = localStorage.getItem('token')
      if(token && !this._jwt.isTokenExpired(token)){
        return true
      }else{

        this._router.navigate(['/login'])
        return false
      }
  }

}
