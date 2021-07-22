import { Injectable, Injector } from '@angular/core';
import { ICraeteMass, IMass, IMasses } from '../shared/models/masses';
import { ApiUrls } from '../shared/models/services-urls';
import { BaseService } from './../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class MassesService extends BaseService {

  constructor(
    injector: Injector
  ) {
    super(injector)
  }

  getAll(){
    const url  = ApiUrls.MASSES.GET_ALL;
    return this.get<IMasses>(url);
  }

  createOrUpdateSec(secId: any){
    let url = ApiUrls.MASSES.UPDATE_SEC
    let params = this.toQueryString(secId)
    url += `?${params}`
    return this.post<number>(url, secId)
  }

  createOrUpdateMass(mass: ICraeteMass){
    const url = ApiUrls.MASSES.CREATE_OR_UPDATE
    return this.post<ICraeteMass>(url, mass)
  }

  delete(massId: number){
    let url  = ApiUrls.MASSES.GET_ALL
    if(massId){
      let params = this.toQueryString({id: massId})
      url += `?${params}`
    }
    return this.remove<IMass>(url);
  }

  getById(id:number){
    const url = ApiUrls.MASSES.GET_BY_ID + `?id=${id}`;
    return this.get<IMass>(url);
  }
}
