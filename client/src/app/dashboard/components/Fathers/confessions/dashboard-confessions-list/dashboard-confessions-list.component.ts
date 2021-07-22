import { Component, Input, OnInit, Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { IConfession } from './../../../../../shared/models/father';
import { ConfessionsService } from './../../../../../services/confessions.service';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { MatDialog } from '@angular/material/dialog';
import { DashboardConfessionFormComponent } from '../dashboard-confession-form/dashboard-confession-form.component';

@Component({
  selector: 'app-dashboard-confessions-list',
  templateUrl: './dashboard-confessions-list.component.html',
  styleUrls: ['./dashboard-confessions-list.component.scss']
})
export class DashboardConfessionsListComponent extends BaseComponent implements OnInit {
  @Input() fatherId: number;
  displayedColumns: string[] = ['position', 'day', 'time', 'place', 'active', 'actions'];
  confessions: IConfession[] = [];
  totalRecords: number;
  constructor(
    injector: Injector,
    private _conf: ConfessionsService,
    private confirmationService: ConfirmationService,
    private _toastr: ToastrsService,
    private formBuilder: FormBuilder,
    private _router: Router,
    public dialog: MatDialog
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.getConfissions()
  }

  getConfissions() {
    if (this.fatherId) {
      this._conf.getFatherById(this.fatherId).subscribe(
        (res: IConfession[]) => {
          this.confessions = res
          this.totalRecords = res.length;
        }
      )
    }
  }

  delete(conf: IConfession){
    this.confirmationService.confirm({
      message: `هل تريد مسح ${conf.day}`,
      header: `تأكيد`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if(conf.id)
        this._conf.delete(conf.id).subscribe(()=> {
          this.getConfissions()
          this._toastr.addSingle(ToastrMessages.success,'تم الحذف', `تم حذف ${conf.day}`)
        },
        err => {
          this._toastr.addSingle(ToastrMessages.error,'خطأ داخلي', 'حدث خطأ بالنظام')
        })
      },
      reject: () => {
       // this.loading = false
      }
    });
  }

  openDialog(id?: number){
    const dialogRef = this.dialog.open(DashboardConfessionFormComponent,  {
      data: {
        fatherId: this.fatherId,
        id: id
      }
      });

    dialogRef.afterClosed().subscribe(result => {
      this.getConfissions()
    });
  }

}
