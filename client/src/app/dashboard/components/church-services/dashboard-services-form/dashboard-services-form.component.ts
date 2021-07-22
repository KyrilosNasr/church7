import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { ChurchServicesService } from 'src/app/services/church-services.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { IServiceDto, IServiceCreate } from 'src/app/shared/models/services';

@Component({
  selector: 'app-dashboard-services-form',
  templateUrl: './dashboard-services-form.component.html',
  styleUrls: ['./dashboard-services-form.component.scss']
})
export class DashboardServicesFormComponent extends BaseComponent implements OnInit {

  servicesForm: FormGroup;
  submitted = false;
  constructor(
    injector: Injector,
    private _service: ChurchServicesService,
    private formBuilder: FormBuilder,
    private _toastr: ToastrsService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) {
    super(injector);
  }

  ngOnInit(): void {
    this.massSecFormInit()
    const id = this._route.snapshot.params['id']
    if(id) {
      this._service.getForEdit(id).subscribe((res: IServiceCreate) => {
        this.servicesForm.patchValue(res)
      })
    }
  }

  massSecFormInit() {
    this.servicesForm = this.formBuilder.group(
      {
        id: [null],
        name: [null, Validators.required],
        bannerId: [null, Validators.required],
        displayOrder: [1000],
        description: [null, Validators.required],
        isActive: [true]
      }
    )
  }
  get f() { return this.servicesForm.controls; };

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.servicesForm.invalid) {
      this.submitted = false;
      return;
    }

    this._service.createOrUpdate(this.servicesForm.value)
    .pipe(
        finalize(()=> {this.submitted = false})
      ).subscribe(res=> {
        // display form values on success
        this._toastr.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
        this.servicesForm.reset();
        this._router.navigate(['/dashboard/services'])
      })

  }

}
