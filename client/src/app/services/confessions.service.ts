import { Injectable, Injector } from '@angular/core';
import { ApiUrls } from '../shared/models/services-urls';
import { BaseService } from './../shared/services/base.service';
import { IConfession } from './../shared/models/father';

@Injectable({
  providedIn: 'root'
})
export class ConfessionsService extends BaseService {

  constructor(
    injector: Injector
  ) {
    super(injector)
  }


  getFatherById(fatherId: number) {
    let url = ApiUrls.CONFESSIONS.MAIN;
    if (fatherId) {
      url += `?fatherId=${fatherId}`
    }
    return this.get<IConfession[]>(url);
  }
  getById(id: number) {
    let url = ApiUrls.CONFESSIONS.MAIN;
    if (id) {
      url += `?id=${id}`
    }
    return this.get<IConfession[]>(url);
  }
  createOrUpdate(conf: IConfession) {
    const url = ApiUrls.CONFESSIONS.MAIN
    return this.post<IConfession>(url, conf)
  }

  delete(id: number) {
    const url = ApiUrls.CONFESSIONS.MAIN + `?id=${id}`
    return this.remove<IConfession>(url);
  }

}
