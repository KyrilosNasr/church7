import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './shared/components/dashboard-layout/dashboard-layout.component';
import { DashboardSidebarComponent } from './shared/components/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardNavbarComponent } from './shared/components/dashboard-navbar/dashboard-navbar.component';
import { DashboardLiveComponent } from './components/dashboard-live/dashboard-live.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardFathersComponent } from './components/Fathers/dashboard-fathers/dashboard-fathers.component';
import { DashboardFatherFormComponent } from './components/Fathers/dashboard-father-form/dashboard-father-form.component';
import { ImagesPopupComponent } from './shared/components/images-popup/images-popup.component';
import { DashbordMassesFormComponent } from './components/masses/dashbord-masses-form/dashbord-masses-form.component';
import { DashboardMassesListComponent } from './components/masses/dashboard-masses-list/dashboard-masses-list.component';
import { DashboardAboutChurchComponent } from './components/dashboard-about-church/dashboard-about-church.component';
import { DashboardServicesListComponent } from './components/church-services/dashboard-services-list/dashboard-services-list.component';
import { DashboardServicesFormComponent } from './components/church-services/dashboard-services-form/dashboard-services-form.component';
import { ChurchMeetingsListComponent } from './components/meetings/church-meetings-list/church-meetings-list.component';
import { ChurchMeetingsFormComponent } from './components/meetings/church-meetings-form/church-meetings-form.component';
import { DashboardConfessionFormComponent } from './components/Fathers/confessions/dashboard-confession-form/dashboard-confession-form.component';
import { DashboardConfessionsListComponent } from './components/Fathers/confessions/dashboard-confessions-list/dashboard-confessions-list.component';
import { GalleryListComponent } from './components/gallery/gallery-list/gallery-list.component';
import { GalleryFormComponent } from './components/gallery/gallery-form/gallery-form.component';
import { GallerySectionFormComponent } from './components/gallery/gallery-section-form/gallery-section-form.component';
import { SectionsListComponent } from './components/sections/sections-list/sections-list.component';
import { SectionsFormComponent } from './components/sections/sections-form/sections-form.component';
import { AdsListComponent } from './components/ads/ads-list/ads-list.component';
import { AdFormComponent } from './components/ads/ad-form/ad-form.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardSidebarComponent,
    DashboardNavbarComponent,
    DashboardLiveComponent,
    DashboardFathersComponent,
    DashboardFatherFormComponent,
    ImagesPopupComponent,
    DashbordMassesFormComponent,
    DashboardMassesListComponent,
    DashboardAboutChurchComponent,
    DashboardServicesListComponent,
    DashboardServicesFormComponent,
    ChurchMeetingsListComponent,
    ChurchMeetingsFormComponent,
    DashboardConfessionsListComponent,
    DashboardConfessionFormComponent,
    GalleryListComponent,
    GalleryFormComponent,
    GallerySectionFormComponent,
    SectionsListComponent,
    SectionsFormComponent,
    AdsListComponent,
    AdFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
