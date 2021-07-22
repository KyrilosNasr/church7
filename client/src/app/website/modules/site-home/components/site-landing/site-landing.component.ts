import { SectionsEnum } from './../../../../../shared/enums/general-sections-enum';
import { Component, OnInit, Injector } from '@angular/core';
import { SectionsService } from 'src/app/services/sections.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ISection } from 'src/app/shared/models/sections';

@Component({
  selector: 'app-site-landing',
  templateUrl: './site-landing.component.html',
  styleUrls: ['./site-landing.component.scss']
})
export class SiteLandingComponent extends BaseComponent implements OnInit {

  sections: ISection[]
  introBanner: string | undefined
  constructor(
    injector: Injector,
    private _sections: SectionsService
  ) {
    super(injector);
    this.getSections();
  }
  sectionName = this.GeneralSectionsEnum.Live

  ngOnInit(): void {
  }

  getSections() {
    this._sections.getSections().subscribe(res => {
      this.sections = res.filter(x => x.isActive == true)
      this.introBanner = res.filter(x => x.sectionName == SectionsEnum.Intro)[0].banner.imgUrl
    })
  }

}
