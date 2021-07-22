import { Injectable, Injector } from '@angular/core';
import { BaseService } from './../shared/services/base.service';
import { ICreateMeeting } from './../shared/models/meetings';
import { ApiUrls } from '../shared/models/services-urls';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService extends BaseService {

  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  createOrUpdate(meeting: ICreateMeeting){
    const url = ApiUrls.SUNDAY_MEETINGS.MAIN
    return this.post<number>(url, meeting)
  }
  getAll(meetingId?: number){
    let url = ApiUrls.SUNDAY_MEETINGS.MAIN
    if(meetingId){
      let params = this.toQueryString({id: meetingId})
      url += `?${params}`
    }
    return this.get<ICreateMeeting[]>(url)
  }
  delete(id: number){
    const url = ApiUrls.SUNDAY_MEETINGS.MAIN + `?id=${id}`
    return this.remove<ICreateMeeting>(url);
   }

}
