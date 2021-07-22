import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { ICreateAd } from 'src/app/shared/models/ads';
import { AdsService } from './../../../../services/ads.service';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.scss']
})
export class AdFormComponent extends BaseComponent implements OnInit {
  adForm: FormGroup;
  submitted = false;
  id: number
  constructor(

    injector: Injector,
    private formBuilder: FormBuilder,
    private _ads: AdsService,
    private _toastr: ToastrsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    super(injector)
    this.id = this._route.snapshot.params['id']
  }

  ngOnInit(): void {

    this.adFormInit()

    if (this.id) {
      this._ads.getById(this.id).subscribe((res: ICreateAd) => {
        this.adForm.patchValue(res)
      })
    }

  }

  adFormInit() {
    this.adForm = this.formBuilder.group(
      {
        id: [null],
        isActive: [true, Validators.required],
        displayOrder: [1000],
        imageId: [null, Validators.required]
      }
    )
  }
  get f() { return this.adForm.controls; };

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.adForm.invalid) {
      this.submitted = false;
      return;
    }

    this._ads.createOrUpdateAd(this.adForm.value)
      .pipe(
        finalize(() => { this.submitted = false })
      ).subscribe(res => {
        this._toastr.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
        this.adForm.reset();
        this._router.navigate(['/dashboard/ads'])
      })

  }

}
