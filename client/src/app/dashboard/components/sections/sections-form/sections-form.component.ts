import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { DaysEnum } from 'src/app/shared/enums/days-enum';
import { GenderEnum, ToastrMessages } from 'src/app/shared/enums/enums';
import { SectionsEnum } from 'src/app/shared/enums/general-sections-enum';
import { SectionsService } from './../../../../services/sections.service';
import { ICreateSection } from './../../../../shared/models/sections';

@Component({
  selector: 'app-sections-form',
  templateUrl: './sections-form.component.html',
  styleUrls: ['./sections-form.component.scss']
})
export class SectionsFormComponent extends BaseComponent implements OnInit {
  secForm: FormGroup;
  submitted = false;
  id: number
  constructor(

    injector: Injector,
    private formBuilder: FormBuilder,
    private _sec: SectionsService,
    private _toastr: ToastrsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    super(injector)
    this.id = this._route.snapshot.params['id']
  }

  ngOnInit(): void {

    this.secFormInit()

    if (this.id) {
      this._sec.getById(this.id).subscribe((res: ICreateSection) => {
        this.secForm.patchValue(res)
        this.updateValidity(res.sectionName)
      })
    }

  }
  updateValidity(event: any) {
    if (event == SectionsEnum.DivImage || event == SectionsEnum.Intro) {
      this.secForm.get('bannerId')?.setValidators([Validators.required]);
      this.secForm.get('bannerId')?.updateValueAndValidity();
    } else {
      this.resetControl(this.secForm, ['bannerId'])
    }
  }

  secFormInit() {
    this.secForm = this.formBuilder.group(
      {
        id: [null],
        isActive: [true, Validators.required],
        isWhite: [true, Validators.required],
        sectionName: [null, [Validators.required]],
        displayOrder: [1000],
        bannerId: [null]
      }
    )
  }
  get f() { return this.secForm.controls; };

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.secForm.invalid) {
      this.submitted = false;
      return;
    }

    this._sec.createOrUpdateSection(this.secForm.value)
      .pipe(
        finalize(() => { this.submitted = false })
      ).subscribe(res => {
        this._toastr.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
        this.secForm.reset();
        this._router.navigate(['/dashboard/sections'])
      })

  }

}
