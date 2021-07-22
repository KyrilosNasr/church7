import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLandingComponent } from './components/site-landing/site-landing.component';
import { SiteHomeRoutingModule } from './site-home-routing.module';
import { SiteIntroComponent } from './components/site-intro/site-intro.component';
import { SiteMassCalenderComponent } from './components/site-mass-calender/site-mass-calender.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SiteVideosCarouselComponent } from './components/site-videos-carousel/site-videos-carousel.component';
import { SiteChurchFathersComponent } from './components/site-church-fathers/site-church-fathers.component';
import { SiteAboutChurchComponent } from './components/site-about-church/site-about-church.component';
import { SiteHomeGalleryComponent } from './components/site-home-gallery/site-home-gallery.component';
import { SiteEventsCarouselComponent } from './components/site-events-carousel/site-events-carousel.component';
import { SiteSoundMediaComponent } from './components/site-sound-media/site-sound-media.component';
import { SiteConfessionsComponent } from './components/site-confessions/site-confessions.component';
import { SiteChurchServicesComponent } from './components/site-church-services/site-church-services.component';
import { SiteLiveStreamComponent } from './components/site-live-stream/site-live-stream.component';
import { SiteHomeSeperatorComponent } from './components/site-home-seperator/site-home-seperator.component';
import { SiteServicesTableComponent } from './components/site-services-table/site-services-table.component';
import { SiteSundayMeetingsComponent } from './components/site-sunday-meetings/site-sunday-meetings.component';



@NgModule({
  declarations: [
    SiteLandingComponent,
    SiteIntroComponent,
    SiteMassCalenderComponent,
    SiteVideosCarouselComponent,
    SiteChurchFathersComponent,
    SiteAboutChurchComponent,
    SiteHomeGalleryComponent,
    SiteEventsCarouselComponent,
    SiteSoundMediaComponent,
    SiteConfessionsComponent,
    SiteChurchServicesComponent,
    SiteLiveStreamComponent,
    SiteHomeSeperatorComponent,
    SiteServicesTableComponent,
    SiteSundayMeetingsComponent
  ],
  imports: [
    CommonModule,
    SiteHomeRoutingModule,
    SharedModule
  ]
})
export class SiteHomeModule { }
