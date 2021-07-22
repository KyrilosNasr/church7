import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChurchServicesService } from 'src/app/services/church-services.service';
import { IServiceDto } from 'src/app/shared/models/services';

@Component({
  selector: 'app-site-church-services',
  templateUrl: './site-church-services.component.html',
  styleUrls: ['./site-church-services.component.scss']
})
export class SiteChurchServicesComponent implements OnInit {
  banner:string
  id: number;
  service: IServiceDto
  constructor(
    private _service : ChurchServicesService,
    private _route: ActivatedRoute,

  ) {

  }

  ngOnInit(): void {
    this._route.params.subscribe(res => {
      if(res.id){
        this.getService(res.id)
      }
    })
  }

  getService(id: number){
    this._service.getById(id).subscribe(res => {
      this.service = res
    })
  }

}
