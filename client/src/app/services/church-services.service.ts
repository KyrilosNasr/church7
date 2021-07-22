import { Injectable, Injector } from '@angular/core';
import { IServiceCreate, IServiceDto, IServiceName } from '../shared/models/services';
import { ApiUrls } from '../shared/models/services-urls';
import { BaseService } from './../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ChurchServicesService extends BaseService {

  constructor(
    injector: Injector
  ) {
    super(injector)
   }

   getAll(){
    const url = ApiUrls.CHURCH_SERVICES.MAIN
    return this.get<IServiceCreate[]>(url)
   }

   getNames(){
    const url = ApiUrls.CHURCH_SERVICES.GET_NAMES
    return this.get<IServiceName[]>(url)
   }

   createOrUpdate(service: IServiceCreate){
    const url = ApiUrls.CHURCH_SERVICES.MAIN
    return this.post<number>(url, service)
   }

   getForEdit(id : number){
     const url = ApiUrls.CHURCH_SERVICES.GET_FOR_EDIT + `?id=${id}`
     return this.get<IServiceCreate>(url);
   }
   getById(id : number){
    const url = ApiUrls.CHURCH_SERVICES.GET_BY_ID + `?id=${id}`
    return this.get<IServiceDto>(url);
  }
   delete(id: number){
    const url = ApiUrls.CHURCH_SERVICES.MAIN + `?id=${id}`
    return this.remove<IServiceDto>(url);
   }

}
