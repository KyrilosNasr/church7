import { HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiUrls } from '../shared/models/services-urls';
import { BaseService } from './../shared/services/base.service';
import { IUser } from './../shared/models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {

  private currentUserSource = new ReplaySubject<IUser | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(
    injector : Injector,
    private router: Router,
    private _jwt: JwtHelperService
  ) {
    super(injector)
   }


   loadCurrentUser(token: string){
    if(token === null){
      this.currentUserSource.next(null)
      return of(null)
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.get<IUser>(ApiUrls.ACCOUNT.ACCOUNT, headers).pipe(
       map((user:IUser) => {
         if(user){
           localStorage.setItem('token', user.token);
           this.currentUserSource.next(user);
         }
       })
    )
  }

  login(value: any){
   const url = ApiUrls.ACCOUNT.LOGIN
   return this.post<IUser>(url, value).pipe(
     map((user:IUser) => {
       if(user){
         localStorage.setItem('token', user.token);
         this.currentUserSource.next(user);
       }
     })
   )
  }


  logout(){
   localStorage.removeItem('token');
   this.currentUserSource.next(null);
   this.router.navigateByUrl('/')
  }

  checkEmailExists(email: string) {
   let url = ApiUrls.ACCOUNT.CHECK_EMAIL
   let params = this.toQueryString({email})
   url += `?${params}`
   return this.get<boolean>(url);
 }

 isAuth() : boolean {
  const token = localStorage.getItem('token');
  if(token && !this._jwt.isTokenExpired(token)){
    return true;
  }else{
    return false
  }
 }
}
