import { Component, OnInit, Injector, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { AdsService } from './../../../../../services/ads.service';
import { IAd } from 'src/app/shared/models/ads';

@Component({
  selector: 'app-site-events-carousel',
  templateUrl: './site-events-carousel.component.html',
  styleUrls: ['./site-events-carousel.component.scss']
})
export class SiteEventsCarouselComponent extends BaseComponent implements OnInit {
  @Input() isWhite = false;
  constructor(
    inj: Injector,
    private _ads: AdsService
  ) {
    super(inj)
  }
  banners: IAd[]
  ngOnInit(): void {
    this.getSec()
  }

  getSec(){
    this._ads.getAds().subscribe(res =>  this.banners = res)
  }


  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

}
