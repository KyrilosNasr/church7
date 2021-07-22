import { Injectable, Injector } from '@angular/core';
import { ISection } from '../shared/models/sections';
import { ApiUrls } from '../shared/models/services-urls';
import { BaseService } from './../shared/services/base.service';
import { ICreateSection } from './../shared/models/sections';

@Injectable({
  providedIn: 'root'
})
export class SectionsService extends BaseService {

  constructor(
    injector: Injector
  ) {
    super(injector)
   }

   getSections(){
      const url = ApiUrls.SECTIONS.MAIN
      return this.get<ISection[]>(url);
   }

   createOrUpdateSection(sec: ICreateSection){
     let url = ApiUrls.SECTIONS.MAIN
     return this.post<ISection>(url, sec);
   }

   delete(id: number){
    const url = ApiUrls.SECTIONS.MAIN + `?id=${id}`
    return this.remove<ISection>(url);
   }

   getById(id: number){
    const url = ApiUrls.SECTIONS.GET_BY_ID + `?id=${id}`
    return this.get<ICreateSection>(url);
   }
}
