import { Component, Injector, Input, OnInit } from '@angular/core';
import { MassesService } from 'src/app/services/masses.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { IMasses, IMassGroup } from 'src/app/shared/models/masses';

@Component({
  selector: 'app-site-mass-calender',
  templateUrl: './site-mass-calender.component.html',
  styleUrls: ['./site-mass-calender.component.scss'],
})
export class SiteMassCalenderComponent extends BaseComponent implements OnInit {
  @Input() showMore = false;
  @Input() isWhite = false;

  banner:string
  repeatedMasses :any

  nonRepeatedMasses :any

  specialDays :any
  constructor(
    injector: Injector,
    private _mass: MassesService
  ) {
    super(injector)

  }

  ngOnInit(): void {
    this.getMasses()
  }

  masses: any
  getMasses(){
    this._mass.getAll().subscribe((res: IMasses) => {
      this.banner = res.banner.imgUrl;
      this.masses = this.groupBy(res.mass, 'massRepetationType')
      this.masses.forEach((element: any) => {
        switch (element.massRepetationType) {
          case this.MassRepetationType.dialy:
            this.repeatedMasses = this.groupBy(element.events, 'day')
            break;
            case this.MassRepetationType.monthly:
            this.nonRepeatedMasses = this.groupBy(element.events, 'day')
            break;
            case this.MassRepetationType.special:
            this.specialDays = this.groupBy(element.events, 'day')
            break;

          default:
            break;
        }
      });

    })
  }
}
