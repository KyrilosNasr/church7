import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { DaysEnum } from 'src/app/shared/enums/days-enum';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { MeetingsService } from './../../../../services/meetings.service';
import { ICreateMeeting } from './../../../../shared/models/meetings';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-church-meetings-form',
  templateUrl: './church-meetings-form.component.html',
  styleUrls: ['./church-meetings-form.component.scss']
})
export class ChurchMeetingsFormComponent extends BaseComponent implements OnInit {


  meetingForm: FormGroup;
  submitted = false;
  constructor(
    injector: Injector,
    private _meeting: MeetingsService,
    private formBuilder: FormBuilder,
    private _toastr: ToastrsService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {
    super(injector);
  }

  ngOnInit(): void {
    this.meetingFormInit()
    const id = this._route.snapshot.params['id']
    if(id) {
      this._meeting.getAll(id).subscribe((res: ICreateMeeting[]) => {
        let form = res.find(x => x.id == id);
        if(form){
          form.startTime = new Date(form.startTime)
          form.endTime = new Date(form.endTime)
          this.meetingForm.patchValue(form)
        }

        throwError('no id')
      })

    }
  }

  meetingFormInit() {
    this.meetingForm = this.formBuilder.group(
      {
        id: [null],
        name: [null, Validators.required],
        grade: [null, Validators.required],
        displayOrder: [1000],
        day: [DaysEnum.Friday, Validators.required],
        isActive: [true],
        startTime: [null, Validators.required],
        endTime: [null, Validators.required],
        place: [null, Validators.required],
      }
    )
  }
  get f() { return this.meetingForm.controls; };

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.meetingForm.invalid) {
      this.submitted = false;
      return;
    }

    this._meeting
    .createOrUpdate(this.meetingForm.value)
    .pipe(
        finalize(()=> {this.submitted = false})
      ).subscribe(res=> {
        // display form values on success
        this._toastr.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
        this.meetingForm.reset();
        this._router.navigate(['/dashboard/meetings'])
      })

  }

}
