import { Injectable, Injector } from '@angular/core';
import { IChurchSection } from '../shared/models/church';
import { ApiUrls } from '../shared/models/services-urls';
import { BaseService } from './../shared/services/base.service';
import { IChurchCreate } from './../shared/models/church';

@Injectable({
  providedIn: 'root'
})
export class AboutChurchService extends BaseService {

  constructor(
    injector: Injector
  ) {
    super(injector);
   }

   getSec(){
     const url = ApiUrls.ABOUT_CHURCH.MAIN
     return this.get<IChurchSection>(url);
   }

   update(church: IChurchCreate){
    const url = ApiUrls.ABOUT_CHURCH.MAIN
    return this.post<IChurchSection>(url, church)
   }
}
