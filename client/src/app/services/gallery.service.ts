import { Injectable, Injector } from '@angular/core';
import { ICreateGalleryImage, IGalleryImage, IGalleryReturn } from '../shared/models/gallery';
import { IPaginationParams } from '../shared/models/pagination';
import { ApiUrls } from '../shared/models/services-urls';
import { BaseService } from './../shared/services/base.service';
import { IImageAssets } from './../shared/models/image-assets';

@Injectable({
  providedIn: 'root'
})
export class GalleryService extends BaseService {

  constructor(
    injector: Injector
  ) {
    super(injector)
   }

   createOrUpdateSec(bannerId: any){
    let url = ApiUrls.GALLERY.UPDATE_SECTION
    let params = this.toQueryString(bannerId)
    url += `?${params}`
    return this.post<number>(url, bannerId)
  }

  CreateOrUpdateImage(image: IGalleryImage){
    let url = ApiUrls.GALLERY.MAIN;
    return this.post<IGalleryImage>(url, image)
  }

   getBanners(pageParams?: IPaginationParams){
    let url = ApiUrls.GALLERY.GET_SECTION
    if(pageParams){
      let params = this.toQueryString(pageParams)
      url += `?${params}`
    }
    return this.get<IGalleryReturn>(url);
   }

   getById(id: number){
    const url = ApiUrls.GALLERY.GET_BY_ID + `?id=${id}`
    return this.get<ICreateGalleryImage>(url);
   }

   delete(galleryImageId: number){
    let url = ApiUrls.GALLERY.MAIN;
    if(galleryImageId){
      let params = this.toQueryString({id: galleryImageId})
      url += `?${params}`
    }
    return this.remove<IGalleryImage>(url);
  }
}
