import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, Injector, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, map, switchMap } from 'rxjs/operators';
import { ImagesPopupComponent } from 'src/app/dashboard/shared/components/images-popup/images-popup.component';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { enumToArray, PriestlyRank, ToastrMessages } from 'src/app/shared/enums/enums';
import { FathersService } from '../../../../services/fathers.service';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IFatherReturn } from 'src/app/shared/models/father';

@Component({
  selector: 'app-dashboard-father-form',
  templateUrl: './dashboard-father-form.component.html',
  styleUrls: ['./dashboard-father-form.component.scss']
})
export class DashboardFatherFormComponent extends BaseComponent implements OnInit {
  fatherForm: FormGroup;
  submitted = false;
  priestlyRankEnum = PriestlyRank
  priestlyRank: any[] = []
  id: number
  constructor(
    injector: Injector,
    private formBuilder: FormBuilder,
    private _father: FathersService,
    private _toastr: ToastrsService,
    private _router: Router,
    private _route: ActivatedRoute
    ) {
    super(injector)
    this.priestlyRank = enumToArray(this.priestlyRankEnum)
  }

  ngOnInit(): void {
    this.fatherFormInit()
    this.id = this._route.snapshot.params['id']
    if(this.id) {
      this._father.getFatherById(this.id).subscribe((res: IFatherReturn) => {
        let father = res.fathers.result.filter(x => x.id == this.id)[0]
        this.fatherForm.patchValue(father)
        this.fatherForm.controls['imageId'].patchValue(father.image.id)
      })
    }
  }

  fatherFormInit() {
    this.fatherForm = this.formBuilder.group(
      {
        id: [null],
        isActive: [true, Validators.required],
        name: [null, [Validators.required]],
        priestlyRank: [PriestlyRank.keseseia, [Validators.required]],
        priestlyDate: [null, [Validators.required]],
        isDead: [false],
        deathDate: [null],
        about: [''],
        imageId: [null, [Validators.required]],
        displayOrder: [1000],

      }
    )
  }
  get f() { return this.fatherForm.controls; };

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.fatherForm.invalid) {
      this.submitted = false;
      return;
    }

    this._father.createFather(this.fatherForm.value)
    .pipe(
        finalize(()=> {this.submitted = false})
      ).subscribe(res=> {
        this._toastr.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
      })

  }

  onReset() {
    this.submitted = false;
    this.fatherForm.reset();
  }
}
