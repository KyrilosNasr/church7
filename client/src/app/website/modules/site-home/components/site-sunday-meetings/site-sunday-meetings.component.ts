import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { MeetingsService } from './../../../../../services/meetings.service';
import { ICreateMeeting } from './../../../../../shared/models/meetings';

@Component({
  selector: 'app-site-sunday-meetings',
  templateUrl: './site-sunday-meetings.component.html',
  styleUrls: ['./site-sunday-meetings.component.scss']
})
export class SiteSundayMeetingsComponent extends BaseComponent implements OnInit {
  meetings: ICreateMeeting[]
  constructor(
    injector: Injector,
    private _meeting: MeetingsService
  ) {
    super(injector)
  }

  ngOnInit(): void {
    this.getMeetings()
  }

  getMeetings(){
    this._meeting.getAll().subscribe(res => this.meetings = res);
  }

}
