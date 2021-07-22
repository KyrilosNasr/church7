import { Component, OnInit } from '@angular/core';
import { AccountService } from './../../../../services/account.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  constructor(private _auth: AccountService) { }

  ngOnInit(): void {
  }

  logout(){
    this._auth.logout()
  }
  checkAuth(){
    return this._auth.isAuth()
  }
}
