import { Component, Input, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-site-intro',
  templateUrl: './site-intro.component.html',
  styleUrls: ['./site-intro.component.scss']
})
export class SiteIntroComponent extends BaseComponent implements OnInit {

  @Input() banner: string
  constructor(injector: Injector) { super(injector) }

  ngOnInit(): void {
  }

}
