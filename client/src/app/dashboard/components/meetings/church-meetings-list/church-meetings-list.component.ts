import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ICreateMeeting } from './../../../../shared/models/meetings';
import { MeetingsService } from './../../../../services/meetings.service';
import { ConfirmationService } from 'primeng/api';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { ToastrsService } from 'src/app/core/services/toastrs.service';

@Component({
  selector: 'app-church-meetings-list',
  templateUrl: './church-meetings-list.component.html',
  styleUrls: ['./church-meetings-list.component.scss']
})
export class ChurchMeetingsListComponent extends BaseComponent implements OnInit {
  totalRecords :number;

  displayedColumns: string[] = ['position', 'name', 'order', 'active', 'actions'];
  meetings: ICreateMeeting[]= [];
  constructor(
    injector: Injector,
    private _meeting: MeetingsService,
    private confirmationService: ConfirmationService,
    private _toastr: ToastrsService,
  ) {
    super(injector)
  }


  ngOnInit(): void {
    this.getMeetings()
  }

  getMeetings(){
    this._meeting.getAll().subscribe(
      (res: ICreateMeeting[]) => {
        this.meetings = res
        this.totalRecords = res.length;
      }
    )
  }

  delete(meeting: ICreateMeeting) {
    this.confirmationService.confirm({
      message: `هل تريد مسح ${meeting.name}`,
      header: `تأكيد`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (meeting.id)
          this._meeting.delete(meeting.id).subscribe(() => {
            this.getMeetings()
            this._toastr.addSingle(ToastrMessages.success, 'تم الحذف', `تم حذف ${meeting.name}`)
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
