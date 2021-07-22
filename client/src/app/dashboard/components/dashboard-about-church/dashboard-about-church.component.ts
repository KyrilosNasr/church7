import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { AboutChurchService } from './../../../services/about-church.service';
import { IChurchCreate } from './../../../shared/models/church';

@Component({
  selector: 'app-dashboard-about-church',
  templateUrl: './dashboard-about-church.component.html',
  styleUrls: ['./dashboard-about-church.component.scss']
})
export class DashboardAboutChurchComponent implements OnInit {
  churchForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private _church: AboutChurchService,
    private _toast: ToastrsService
  ) {
    this._church.getSec().subscribe(form => {
      if(form){
        let newForm: IChurchCreate = {
          description : form.description,
          bannerId : form.banner.id,
          imageId : form.image.id,
      }

      this.churchForm.patchValue(newForm)
      }
    })
  }

  ngOnInit(): void {
    this.formInit()

  }

  formInit(){
    this.churchForm = this.formBuilder.group(
      {
        isActive:  [true, Validators.required],
        imageId: [null],
        bannerId: [null],
        description: [null, Validators.required]
      }
    )
  }
  get f() { return this.churchForm.controls; };

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.churchForm.invalid) {
      this.submitted = false;
        return;
    }

    this._church.update(this.churchForm.value).pipe(
      finalize(()=> {this.submitted = false})
    ).subscribe(res=> {
      // display form values on success
      this._toast.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
    })

}

}
