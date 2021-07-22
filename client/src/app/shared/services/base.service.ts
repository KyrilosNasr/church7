import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPagination, ListResult, ResponseResult } from '../models/response-result';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private http: HttpClient
  private readonly baseUrl;

  constructor(
    injector: Injector
  ) {
    this.http = injector.get(HttpClient)
    this.baseUrl = environment.remoteServiceBaseUrl
  }

  protected get<T>(url: string, headers?: HttpHeaders){
    return this.http.get<T>(`${this.baseUrl}/${url}`, {headers})
  }
  protected getMany<T>(url: string): Observable<IPagination<T>> {
    return this.http
      .get<IPagination<T>>(`${this.baseUrl}/${url}`)
  }

  protected getDirect(url: string, headers?: HttpHeaders){
    return this.http.get(`${this.baseUrl}/${url}`, {headers})
  };

  protected getList<T>(url: string): Observable<ListResult<T>> {
    return this.http.get<ListResult<T>>(`${this.baseUrl}/${url}`)
  }

  protected post<T>(url: string, data: any){
    return this.http
      .post<T>(`${this.baseUrl}/${url}`, data)

      //.pipe(map((data: T) => data));
  }

  protected postBasic<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, data)
  }


  protected put<T>(url: string, data: T): Observable<T> {
    return this.http
      .put<ResponseResult<T>>(`${this.baseUrl}/${url}`, data)
      .pipe(map((data: ResponseResult<T>) => data.result));
  }

  protected remove<T>(url: string): Observable<T> {
    return this.http
      .delete<ResponseResult<T>>(`${this.baseUrl}/${url}`)
      .pipe(map((data: ResponseResult<T>) => data.result));
  }

  protected toQueryString(obj: any) : string {
    return Object.keys(obj)
      .filter((key: any) => obj[key] != undefined)
      .map(key => key + "=" + obj[key])
      .join("&");
  }


}
