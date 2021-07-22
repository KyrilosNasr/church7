import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SiteLayoutComponent } from './shared/components/site-layout/site-layout.component';
import { SharedModule } from '../shared/shared.module';
import { SiteNavbarComponent } from './shared/components/site-navbar/site-navbar.component';
import { SiteFooterComponent } from './shared/components/site-footer/site-footer.component';

@NgModule({
  declarations: [SiteLayoutComponent, SiteNavbarComponent, SiteFooterComponent],
  imports: [CommonModule, WebsiteRoutingModule, SharedModule],
})
export class WebsiteModule {}
