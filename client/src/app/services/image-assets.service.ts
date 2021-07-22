import { environment } from './../../environments/environment';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IImageAssets, IImageAssetsParams } from '../shared/models/image-assets';
import { IPagination } from './../shared/models/response-result';

@Injectable({
  providedIn: 'root'
})
export class ImageAssetsService {

  constructor(private http: HttpClient) { }


  upload(file: any) {
    const url = `${environment.remoteServiceBaseUrl}api/ImageAssets`;
    return this.http.post(url, file, { reportProgress: true, observe: 'events' })
  }

  getImgById(id: number) {
    const url = `${environment.remoteServiceBaseUrl}api/ImageAssets`;
    return this.http.get(url + "/" + id)
  }

  getAll(images?: IImageAssetsParams) {
    let url = `${environment.remoteServiceBaseUrl}api/ImageAssets`;
    if (images) {
      let params = this.toQueryString(images)
      url += `?${params}`
    }
    return this.http.get<IPagination<IImageAssets>>(url)
  }


  protected toQueryString(obj: any): string {
    return Object.keys(obj)
      .filter((key: any) => obj[key] != undefined)
      .map(key => key + "=" + obj[key])
      .join("&");
  }
}
