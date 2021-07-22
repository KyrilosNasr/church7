import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-home-seperator',
  templateUrl: './site-home-seperator.component.html',
  styleUrls: ['./site-home-seperator.component.scss']
})
export class SiteHomeSeperatorComponent implements OnInit {
  @Input() banner:string;
  @Input() fixed:boolean = false;
  @Input() hasMarginBottom:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
