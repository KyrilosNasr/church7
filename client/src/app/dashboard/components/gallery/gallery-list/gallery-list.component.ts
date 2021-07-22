import { Component, Injector, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { IGalleryImage, IGalleryReturn } from 'src/app/shared/models/gallery';
import { IMaterialsPagination, IPaginationParams } from 'src/app/shared/models/pagination';
import { IPagination } from 'src/app/shared/models/response-result';
import { GalleryService } from './../../../../services/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent extends BaseComponent implements OnInit {

  displayedColumns: string[] = ['position', 'img', 'order', 'actions'];
  images: IGalleryImage[]
  totalRecords: number;
  paginatorEvent: IMaterialsPagination = {
    length: 0,
    pageIndex: 1,
    pageSize: 5,
    previousPageIndex: 0
  }
  constructor(
    injector: Injector,
    private _gallery: GalleryService,
    private _toastr: ToastrsService,
    private confirmationService: ConfirmationService,
  ) {
    super(injector)
  }

  ngOnInit(): void {
    this.getImages()
  }

  getImages() {
    let params: IPaginationParams = {
      PageIndex: this.paginatorEvent.pageIndex,
      PageSize: this.paginatorEvent.pageSize
    }
    this._gallery.getBanners(params).subscribe(
      (res) => {
        this.images = res.images.result
        this.totalRecords = res.images.count;
      }
    )
  }

  paginate(event: IMaterialsPagination){
    event.pageIndex += 1
    this.paginatorEvent = event;
    this.getImages()
  }

  delete(img: IGalleryImage) {
    this.confirmationService.confirm({
      message: `هل تريد مسح ${img.image.title}`,
      header: `تأكيد`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (img.id)
          this._gallery.delete(img.id).subscribe(() => {
            this.getImages()
            this._toastr.addSingle(ToastrMessages.success, 'تم الحذف', `تم حذف ${img.image.title}`)
          },
            err => {
              this._toastr.addSingle(ToastrMessages.error, 'خطأ داخلي', 'حدث خطأ بالنظام')
            })
      },
      reject: () => {
        // this.loading = false
      }
    }
    )
  }

}
