import { Component, Injector, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { SectionsService } from 'src/app/services/sections.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { ISection } from 'src/app/shared/models/sections';

@Component({
  selector: 'app-sections-list',
  templateUrl: './sections-list.component.html',
  styleUrls: ['./sections-list.component.scss']
})
export class SectionsListComponent extends BaseComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'order', 'hasBanner', 'white' , 'active', 'actions'];
  sections: ISection[] = [];
  totalRecords: number;
  constructor(
    injector: Injector,
    private _sec: SectionsService,
    private confirmationService: ConfirmationService,
    private _toastr: ToastrsService,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.getSections()
  }

  getSections() {
    this._sec.getSections().subscribe(
      (res: ISection[]) => {
        this.sections = res
        this.totalRecords = res.length;
      }
    )
  }

  delete(sec: ISection){
    this.confirmationService.confirm({
      message: `هل تريد مسح ${this.findValue(this.generalSections ,sec.sectionName)}`,
      header: `تأكيد`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if(sec.id)
        this._sec.delete(sec.id).subscribe(()=> {
          this.getSections()
          this._toastr.addSingle(ToastrMessages.success,'تم الحذف', `تم حذف ${this.findValue(this.generalSections,sec.sectionName)}`)
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
