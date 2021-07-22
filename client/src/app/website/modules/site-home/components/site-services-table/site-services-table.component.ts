import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-services-table',
  templateUrl: './site-services-table.component.html',
  styleUrls: ['./site-services-table.component.scss']
})
export class SiteServicesTableComponent implements OnInit {
  banner:string = 'http://boltoncopts.org/wp-content/uploads/2017/11/cropped-12779085_10153439604893951_2889210514726304878_o.jpg';

  constructor() { }

  ngOnInit(): void {
  }
  services = [
    {
      name: 'الأباء السواح',
      age: 'ثانوي بنين',
      day: 'الجمعة',
      start: '07:00 pm',
      end: '08:00 pm',
      place: 'قاعة مارمينا',
    },
    {
      name: 'الأباء السواح',
      age: 'ثانوي بنين',
      day: 'الجمعة',
      start: '07:00 pm',
      end: '08:00 pm',
      place: 'قاعة مارمينا',
    },
    {
      name: 'الأباء السواح',
      age: 'ثانوي بنين',
      day: 'الجمعة',
      start: '07:00 pm',
      end: '08:00 pm',
      place: 'قاعة مارمينا',
    },
    {
      name: 'الأباء السواح',
      age: 'ثانوي بنين',
      day: 'الجمعة',
      start: '07:00 pm',
      end: '08:00 pm',
      place: 'قاعة مارمينا',
    }
  ]

}
