import { HttpClient } from '@angular/common/http';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { GalleryService } from 'src/app/services/gallery.service';
import { Router } from '@angular/router';
import { ICarouselImage, IGalleryImage, IGalleryReturn } from 'src/app/shared/models/gallery';
import { IImageAssets } from 'src/app/shared/models/image-assets';

@Component({
  selector: 'app-site-home-gallery',
  templateUrl: './site-home-gallery.component.html',
  styleUrls: ['./site-home-gallery.component.scss'],
})
export class SiteHomeGalleryComponent extends BaseComponent implements OnInit {
  showFlag: boolean = false;
  selectedImageIndex: number = -1;
  route: boolean
  params: {
    PageIndex: number;
    PageSize: number;
  }
  totalCount: number

  constructor(
    injector: Injector,
    private _router: Router,
    private _gallery: GalleryService
  ) {
    super(injector)
    this.route = this._router.url.includes("/gallery");
    this.params = { PageIndex: 1, PageSize: 8 }
  }
  @Input() showMore = false;
  @Input() isWhite = false;
  banner: string | undefined
  images: ICarouselImage[] = [];
  ngOnInit(): void {
    if (this.route) {
      this.params.PageIndex = 1;
      this.params.PageSize = 16;
    }
    this.getSec()

  }

  getSec() {
    this._gallery.getBanners(this.params).subscribe((res: IGalleryReturn) => {
      this.totalCount = res.images.count
      this.banner = res.banner?.imgUrl
      res.images.result.forEach((img: IGalleryImage) => {
        let carouselImage: ICarouselImage = {
          image: img.image.imgUrl,
          alt: img.image.title,
          title: img.image.title
        }
        if (!this.images.includes(carouselImage)) {
          this.images.push(carouselImage)
        }
      })
      if (this.images.length <= res.images.count) {
        this.params.PageIndex += 1
      }
    })
  }
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  showLightbox(index: number) {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.selectedImageIndex = -1;
  }

}
