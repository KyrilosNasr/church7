import { Injectable, Injector } from '@angular/core';
import { IAd, ICreateAd } from '../shared/models/ads';
import { ApiUrls } from '../shared/models/services-urls';
import { BaseService } from '../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class AdsService extends BaseService {

  constructor(
    injector: Injector
  ) {
    super(injector)
   }

   getAds(){
     const url = ApiUrls.ADS.MAIN
      return this.get<IAd[]>(url);
   }

   createOrUpdateAd(sec: ICreateAd){
     let url = ApiUrls.ADS.MAIN
     return this.post<IAd>(url, sec);
   }

   delete(id: number){
    const url = ApiUrls.ADS.MAIN + `?id=${id}`
    return this.remove<IAd>(url);
   }

   getById(id: number){
    const url = ApiUrls.ADS.GET_BY_ID + `?id=${id}`
    return this.get<ICreateAd>(url);
   }
}
