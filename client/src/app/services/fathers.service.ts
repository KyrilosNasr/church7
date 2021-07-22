import { Injectable, Injector } from '@angular/core';
import { IFather, IFatherParams, IFatherReturn } from '../shared/models/father';
import { IPagination } from '../shared/models/response-result';
import { ApiUrls } from '../shared/models/services-urls';
import { BaseService } from './../shared/services/base.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FathersService extends BaseService {

  constructor(
    injector: Injector
  ) {
    super(injector)
  }

  getFathers(fatherParams?: IFatherParams){
    let url = ApiUrls.FATHERS.MAIN;
    if(fatherParams){
      let params = this.toQueryString(fatherParams)
      url += `?${params}`
    }
    return this.get<IPagination<IFather>>(url);
  }

  getFatherById(id: number){
    let url = ApiUrls.FATHERS.SECTION + `?FatherId=${id}`;

    return this.get<IFatherReturn>(url);
  }

  getFathersSec(fatherParams?: IFatherParams){
    let url = ApiUrls.FATHERS.SECTION;
    if(fatherParams){
      let params = this.toQueryString(fatherParams)
      url += `?${params}`
    }
    return this.get<IFatherReturn>(url);
  }

  createFather(father: IFather){
    let url = ApiUrls.FATHERS.MAIN;
    return this.post<IFather>(url, father)
  }

  delete(fatherId: number){
    let url = ApiUrls.FATHERS.MAIN;
    if(fatherId){
      let params = this.toQueryString({id: fatherId})
      url += `?${params}`
    }
    return this.remove<IFather>(url);
  }

  createOrUpdateSec(bannerId: any){
    let url = ApiUrls.FATHERS.UPDATE_SECTION
    let params = this.toQueryString(bannerId)
    url += `?${params}`
    return this.post<number>(url, bannerId)
  }
}
