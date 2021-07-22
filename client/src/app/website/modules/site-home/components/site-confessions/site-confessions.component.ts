import { Component, Injector, OnInit } from '@angular/core';
import { FathersService } from 'src/app/services/fathers.service';
import { ActivatedRoute } from '@angular/router';
import { IFather } from 'src/app/shared/models/father';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { IConfession } from './../../../../../shared/models/father';

@Component({
  selector: 'app-site-confessions',
  templateUrl: './site-confessions.component.html',
  styleUrls: ['./site-confessions.component.scss']
})
export class SiteConfessionsComponent extends BaseComponent implements OnInit {

  banner:string | undefined
  id: number
  father: IFather
  confessions: any
  constructor(
    injector: Injector,
    private _father: FathersService,
    private _route: ActivatedRoute
    ) {
    super(injector);
    this.id = this._route.snapshot.params['id']
   }

  ngOnInit(): void {
    this.getFather(this.id)
  }

  getFather(id: number){
    this._father.getFatherById(id).subscribe(res => {
      this.banner = res.banner?.imgUrl
      this.father = res.fathers.result.filter(x => x.id == id)[0]
      this.confessions = this.groupBy(this.father.confessions, 'day')
    })
  }



}
