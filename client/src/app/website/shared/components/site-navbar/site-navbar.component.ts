import { Component, HostListener, OnInit } from '@angular/core';
import { ChurchServicesService } from 'src/app/services/church-services.service';
import { IServiceName } from './../../../../shared/models/services';
import { AccountService } from 'src/app/services/account.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-site-navbar',
  templateUrl: './site-navbar.component.html',
  styleUrls: ['./site-navbar.component.scss']
})
export class SiteNavbarComponent implements OnInit {
  isSticky: boolean = false;
  names: IServiceName[]
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 78;
  }
  constructor(
    private _churchServices: ChurchServicesService,
    private _auth: AccountService
  ) { }

  ngOnInit(): void {
    this.getServicesNames()
    this.checkAuth()
  }

  checkAuth(){
     return this._auth.isAuth()
  }

  getServicesNames(){
    this._churchServices.getNames().subscribe(res => this.names = res)
  }


}
