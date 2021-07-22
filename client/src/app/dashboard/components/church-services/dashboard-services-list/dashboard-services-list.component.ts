import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { IServiceCreate, IServiceDto } from 'src/app/shared/models/services';
import { ChurchServicesService } from './../../../../services/church-services.service';

@Component({
  selector: 'app-dashboard-services-list',
  templateUrl: './dashboard-services-list.component.html',
  styleUrls: ['./dashboard-services-list.component.scss']
})
export class DashboardServicesListComponent extends BaseComponent implements OnInit {
  totalRecords :number;

  displayedColumns: string[] = ['position', 'name', 'active', 'actions'];
  services: IServiceCreate[]= [];

  constructor(
    injector: Injector,
    private _service: ChurchServicesService,
    private formBuilder: FormBuilder,
    private _toastr: ToastrsService,
    private confirmationService: ConfirmationService,
    ) {
    super(injector);
  }

  ngOnInit(): void {
    this.getServices()
  }

  getServices(){
    this._service.getAll().subscribe(
      (res: IServiceCreate[]) => {
        this.services = res
        this.totalRecords = res.length;
      }
    )
  }

  delete(service: IServiceDto) {
    this.confirmationService.confirm({
      message: `هل تريد مسح ${service.name}`,
      header: `تأكيد`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (service.id)
          this._service.delete(service.id).subscribe(() => {
            this.getServices()
            this._toastr.addSingle(ToastrMessages.success, 'تم الحذف', `تم حذف ${service.name}`)
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
