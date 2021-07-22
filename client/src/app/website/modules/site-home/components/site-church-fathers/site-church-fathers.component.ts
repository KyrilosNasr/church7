import { AfterContentInit, Component, Input, OnInit, ViewChild, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FathersService } from 'src/app/services/fathers.service';
import { IFather, IFatherReturn } from 'src/app/shared/models/father';
import { IImageAssets } from 'src/app/shared/models/image-assets';
import { IPagination } from 'src/app/shared/models/response-result';
import { SiteConfessionsComponent } from './../site-confessions/site-confessions.component';
import { IFatherParams } from './../../../../../shared/models/father';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-site-church-fathers',
  templateUrl: './site-church-fathers.component.html',
  styleUrls: ['./site-church-fathers.component.scss']
})
export class SiteChurchFathersComponent extends BaseComponent implements OnInit {
  @Input() showMore = false;
  @Input() isWhite = false;
  banner: IImageAssets | undefined
  fathers: IFather[]
  params : {
    PageIndex: number;
    PageSize: number;
  } = {PageIndex: 1, PageSize: 6}
  route: boolean
  constructor(
    injector: Injector,
    private _router: Router,
    private _fathers: FathersService,
  ) {
    super(injector);
    this.route = this._router.url.includes("/fathers");
  }

  ngOnInit(): void {

    if (this.route) {
      this.params.PageIndex = 1;
      this.params.PageSize = 1600;
    }
    this.getFathers()
  }


  getFathers(){

    this._fathers.getFathersSec(this.params).subscribe(res => {
      this.banner = res.banner
      this.fathers = res.fathers.result

    })
  }

  bishop = {
    name: 'أنبا أنجيلوس',
    bishopType: "أسقف عام قطاع شبرا الشمالية",
    monasticDate: '01-02-1111',
    ordinationDate: '01-02-1111',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSMu47mafyh-hlHynd13Xmxp51ebRDhT11Q&usqp=CAU'
  }



}
