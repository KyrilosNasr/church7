import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { DaysEnum } from 'src/app/shared/enums/days-enum';
import { GenderEnum, PriestlyRank, ToastrMessages } from 'src/app/shared/enums/enums';
import { ConfessionsService } from './../../../../../services/confessions.service';
import { IConfession } from './../../../../../shared/models/father';

@Component({
  selector: 'app-dashboard-confession-form',
  templateUrl: './dashboard-confession-form.component.html',
  styleUrls: ['./dashboard-confession-form.component.scss']
})
export class DashboardConfessionFormComponent extends BaseComponent implements OnInit {

  confForm: FormGroup;
  submitted = false;
  fatherId: number
  id: number
  constructor(
    public dialogRef: MatDialogRef<DashboardConfessionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    injector: Injector,
    private formBuilder: FormBuilder,
    private _conf: ConfessionsService
  ) {
    super(injector)
    this.fatherId = this.data.fatherId;
    this.id = this.data.id;
  }

  ngOnInit(): void {
    this.confFormInit()

    if (this.id) {
      this._conf.getById(this.id).subscribe((res: IConfession[]) => {
        let conf = res.filter(x => x.id == this.id)[0]
        conf.startTime = new Date(conf.startTime)
        conf.endTime = new Date(conf.endTime)
        this.confForm.patchValue(conf)
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  confFormInit() {
    this.confForm = this.formBuilder.group(
      {
        id: [null],
        isActive: [true, Validators.required],
        day: [DaysEnum.Friday, [Validators.required]],
        place: [null],
        startTime: [null, Validators.required],
        endTime: [null, Validators.required],
        fathersId: [this.fatherId, Validators.required],
        gender: [GenderEnum.Booth, Validators.required],
        displayOrder: [1000]
      }
    )
  }
  get f() { return this.confForm.controls; };

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.confForm.invalid) {
      this.submitted = false;
      return;
    }

    this._conf.createOrUpdate(this.confForm.value)
      .pipe(
        finalize(() => { this.submitted = false })
      ).subscribe(res => {
        this.dialogRef.close(res)
      })

  }

}
