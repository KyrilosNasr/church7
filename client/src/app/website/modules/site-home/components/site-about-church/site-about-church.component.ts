import { Component, Input, OnInit } from '@angular/core';
import { IChurchSection } from 'src/app/shared/models/church';
import { AboutChurchService } from './../../../../../services/about-church.service';

@Component({
  selector: 'app-site-about-church',
  templateUrl: './site-about-church.component.html',
  styleUrls: ['./site-about-church.component.scss']
})
export class SiteAboutChurchComponent implements OnInit {
  @Input() showMore = false;
  @Input() isWhite = false;

  aboutChurch: IChurchSection;
  constructor(
    private _about : AboutChurchService
  ) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this._about.getSec().subscribe(res => {
      this.aboutChurch = res
    })
  }


}
