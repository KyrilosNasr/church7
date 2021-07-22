import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { DaysEnum } from 'src/app/shared/enums/days-enum';
import { enumToArray, MassRepetationType, MassTypesEnum, ToastrMessages } from 'src/app/shared/enums/enums';
import { IMass } from 'src/app/shared/models/masses';
import { MassesService } from './../../../../services/masses.service';

@Component({
  selector: 'app-dashbord-masses-form',
  templateUrl: './dashbord-masses-form.component.html',
  styleUrls: ['./dashbord-masses-form.component.scss']
})
export class DashbordMassesFormComponent extends BaseComponent implements OnInit {
  massForm: FormGroup;
  submitted = false;
  constructor(
    injector: Injector,
    private formBuilder: FormBuilder,
    private _toastr: ToastrsService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _mass: MassesService
  ) {
    super(injector)

  }

  ngOnInit(): void {
    this.massFormInit()
    this.repeatitionControlValueChanged();
    const id = this._route.snapshot.params['id']
    if(id) {
      this._mass.getById(id).subscribe((res: IMass) => {

        res.startTime = new Date(res.startTime)
        res.endTime = new Date(res.endTime)
        this.massForm.patchValue(res)
      })
    }
    this.repeatitionControlValueChanged();
  }

  massFormInit() {
    this.massForm = this.formBuilder.group(
      {
        id: [null],
        isActive: [true, Validators.required],
        name: [null, [Validators.required]],
        massRepetationType: [MassRepetationType.dialy, [Validators.required]],
        day: [DaysEnum.Sunday, [Validators.required]],
        displayOrder: [1000],
        date: [null],
        type: [MassTypesEnum.mass],
        place: [null],
        startTime: [null, Validators.required],
        endTime: [null, Validators.required],
        order: [null],
      }
    )
  }
  get f() { return this.massForm.controls; };

  repeatitionControlValueChanged() {
    this.massForm.get('massRepetationType')?.valueChanges.subscribe(
        (mode: number) => {
            // console.log(mode);
            if (mode === MassRepetationType.monthly) {
              this.resetControl(this.massForm, ['date'])
              this.massForm.get('order')?.setValidators([Validators.required]);
              this.massForm.get('order')?.updateValueAndValidity();
            }
            else if (mode === MassRepetationType.special) {
              this.resetControl(this.massForm, ['order'])
              this.massForm.get('date')?.setValidators([Validators.required]);
              this.massForm.get('date')?.updateValueAndValidity();
            }
            else {
              this.resetControl(this.massForm, ['date', 'order'])
            }
        });
}

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.massForm.invalid) {
      this.submitted = false;
      return;
    }

    this._mass.createOrUpdateMass(this.massForm.value)
    .pipe(
        finalize(()=> {this.submitted = false})
      ).subscribe(res=> {
        this._toastr.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
        this._router.navigate(['/dashboard/masses'])
      })
  }

}
