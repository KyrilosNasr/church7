import { Component, Injector, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { IAd } from 'src/app/shared/models/ads';
import { AdsService } from './../../../../services/ads.service';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent extends BaseComponent implements OnInit {

  displayedColumns: string[] = ['position', 'img', 'order', 'active', 'actions'];
  ads: IAd[] = [];
  totalRecords: number;

  constructor(
    injector: Injector,
    private _sec: AdsService,
    private confirmationService: ConfirmationService,
    private _toastr: ToastrsService,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.getAds()
  }

  getAds() {
    this._sec.getAds().subscribe(
      (res: IAd[]) => {
        this.ads = res
        this.totalRecords = res.length;
      }
    )
  }

  delete(sec: IAd){
    this.confirmationService.confirm({
      message: `هل تريد مسح ${sec.image.title}`,
      header: `تأكيد`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if(sec.id)
        this._sec.delete(sec.id).subscribe(()=> {
          this.getAds()
          this._toastr.addSingle(ToastrMessages.success,'تم الحذف', `تم حذف ${sec.image.title}`)
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


}
