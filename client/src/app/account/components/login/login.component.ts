import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { BusyService } from './../../../core/services/busy.service';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  loginForm: FormGroup
  returnUrl: string
  submitted: boolean = false;
  constructor(
    injector: Injector,
    private formBuilder: FormBuilder,
    private _account: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _bussy: BusyService,
    private _toastr: ToastrsService
  ) {
    super(injector)
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/dashboard'
    this.loginFormInit()
  }
  loginFormInit() {
    this.loginForm = this.formBuilder.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]]
      }
    )
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true
    let er = this.loginForm.get('password')?.hasError('minlength')

    if (!this.loginForm.valid) {
      this.submitted = false;
      return };
    this._account.login(this.loginForm.value).subscribe((res) => {
      this.router.navigateByUrl(this.returnUrl)
    }, err => {
      this._toastr.addSingle(ToastrMessages.error, 'حدث خطأ ما', 'بريد إلكتروني أو كلمة مرور خاطئة')
      console.log(err)
    })
  }

}
