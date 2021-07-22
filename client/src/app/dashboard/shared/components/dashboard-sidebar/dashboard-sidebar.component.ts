import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu = [
    {
      name: 'البث المباشر',
      route: '/dashboard/live'
    },
    {
      name: 'أباء الكنيسة',
      route: '/dashboard/fathers'
    },
    {
      name: 'القداسات',
      route: '/dashboard/masses'
    },
    {
      name: 'عن الكنيسة',
      route: '/dashboard/about-curch'
    },
    {
      name: 'خدمات الكنيسة',
      route: '/dashboard/services'
    },
    {
      name: 'التربية الكنسية',
      route: '/dashboard/meetings'
    },
    {
      name: 'معرض الصور',
      route: '/dashboard/gallery'
    },
    {
      name: 'أقسام الرئيسية',
      route: '/dashboard/sections'
    },
    {
      name: 'إعلانات هامة',
      route: '/dashboard/ads'
    }
  ]

}
