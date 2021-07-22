import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { BusyService } from './core/services/busy.service';
import { BaseComponent } from './shared/components/base/base.component';
import { TranslationService } from './core/translation/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements AfterViewInit, OnInit {
  title = 'stMaryAndArchMichael';
  constructor(
    injector: Injector,
    private _busyService: BusyService,
    private _translation: TranslationService
    ) {
    super(injector)
    this._busyService.busy();
  }
  ngOnInit(): void {
    this._translation.translate()
  }
  ngAfterViewInit(): void {
    this._busyService.idle()
  }

  Translate() { }
}
