import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { IMasses } from 'src/app/shared/models/masses';
import { IMaterialsPagination, IPaginatorEvent } from 'src/app/shared/models/pagination';
import { IPagination } from 'src/app/shared/models/response-result';
import { MassesService } from './../../../../services/masses.service';
import { IMass } from './../../../../shared/models/masses';

@Component({
  selector: 'app-dashboard-masses-list',
  templateUrl: './dashboard-masses-list.component.html',
  styleUrls: ['./dashboard-masses-list.component.scss']
})
export class DashboardMassesListComponent extends BaseComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'type', 'time', 'active', 'actions'];
  masses: IMass[] = [];
  tableInit = {
    first: 1,
    globalFilter: null,
    multiSortMeta: undefined,
    rows: 3,
    sortField: undefined,
    sortOrder: 1,
  };
  totalRecords: number;
  massSecForm: FormGroup;
  submitted = false;
  paginatorEvent: IMaterialsPagination = {
    length: 0,
    pageIndex: 1,
    pageSize: 5,
    previousPageIndex: 0
  }
  constructor(
    injector: Injector,
    private _masses: MassesService,
    private formBuilder: FormBuilder,
    private _toastr: ToastrsService,
    private confirmationService: ConfirmationService,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.massSecFormInit()
    this.getmassSec()
  }

  massSecFormInit() {
    this.massSecForm = this.formBuilder.group(
      {
        bannerId: [null, Validators.required]

      }
    )
  }
  get f() { return this.massSecForm.controls; };

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.massSecForm.invalid) {
      this.submitted = false;
      return;
    }

    this._masses.createOrUpdateSec(this.massSecForm.value)
      .pipe(
        finalize(() => { this.submitted = false })
      ).subscribe(res => {
        // display form values on success
        this._toastr.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
        this.massSecForm.reset();
      })
  }

  getmassSec() {
    this._masses.getAll().subscribe(
      (res: IMasses) => {
        this.masses = res.mass
        this.totalRecords = res.mass.length;
      }
    )
  }

  delete(mass: IMass) {
    this.confirmationService.confirm({
      message: `هل تريد مسح ${mass.name}`,
      header: `تأكيد`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (mass.id)
          this._masses.delete(mass.id).subscribe(() => {
            this.getmassSec()
            this._toastr.addSingle(ToastrMessages.success, 'تم الحذف', `تم حذف ${mass.name}`)
          },
            err => {
              this._toastr.addSingle(ToastrMessages.error, 'خطأ داخلي', 'حدث خطأ بالنظام')
            })
      },
      reject: () => {
        // this.loading = false
      }
    }
    )
  }

}
