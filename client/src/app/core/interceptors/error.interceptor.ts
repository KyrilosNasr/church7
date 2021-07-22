import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { catchError, delay } from "rxjs/operators";
import { NavigationExtras, Router } from "@angular/router";
import { ToastrsService } from "../services/toastrs.service";
import { ToastrMessages } from "src/app/shared/enums/enums";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
  constructor(private router: Router,
    private toastr: ToastrsService
    ){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return  next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if(error){
            if(error.status === 400){
              this.toastr.addSingle(ToastrMessages.error, 'حدث خطأ ما', 'تأكد من البيانات المرسلة')
              // .error(error.error.message, error.error.statusCode)
            }
            if(error.status === 401 && req.method === "POST" && !req.url.includes("login")){
              this.toastr.addSingle(ToastrMessages.error, 'خطأ', 'غير مسموح لك بالوصول لهذة الصفحة')
              // this.toastr.error(error.error.message, error.error.statusCode)
            }
            if(error.status === 404){
              this.toastr.addSingle(ToastrMessages.error, 'حدث خطأ ما', 'تأكد من البيانات المرسلة')
              // this.router.navigateByUrl('/404')
            }
            if(error.status === 500){
              this.toastr.addSingle(ToastrMessages.error, 'حدث خطأ ما', 'خطأ داخلي')
              // const navigationExtras : NavigationExtras = {state: {error: error.error}}
              // this.router.navigateByUrl('/500', navigationExtras)
            }
          }
          return throwError(error)
        })
      )
  }

}
