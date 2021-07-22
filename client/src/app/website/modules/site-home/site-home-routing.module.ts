import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from '../../shared/components/site-layout/site-layout.component';
import { SiteAboutChurchComponent } from './components/site-about-church/site-about-church.component';
import { SiteChurchFathersComponent } from './components/site-church-fathers/site-church-fathers.component';
import { SiteChurchServicesComponent } from './components/site-church-services/site-church-services.component';
import { SiteConfessionsComponent } from './components/site-confessions/site-confessions.component';
import { SiteHomeGalleryComponent } from './components/site-home-gallery/site-home-gallery.component';
import { SiteLandingComponent } from './components/site-landing/site-landing.component';
import { SiteMassCalenderComponent } from './components/site-mass-calender/site-mass-calender.component';
import { SiteServicesTableComponent } from './components/site-services-table/site-services-table.component';
import { SiteSundayMeetingsComponent } from './components/site-sunday-meetings/site-sunday-meetings.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: '',
        component: SiteLandingComponent
      },
      {
        path: 'masses',
        component: SiteMassCalenderComponent
      },
      {
        path: 'about-church',
        component: SiteAboutChurchComponent
      },
      {
        path: 'gallery',
        component: SiteHomeGalleryComponent
      },
      {
        path: 'fathers/:id',
        component: SiteConfessionsComponent
      },
      {
        path: 'fathers',
        component: SiteChurchFathersComponent
      },
      {
        path: 'confession/:id',
        component: SiteConfessionsComponent
      },
      {
        path: 'church-service/sunday-school',
        component: SiteSundayMeetingsComponent
      },
      {
        path: 'church-service/:id',
        component: SiteChurchServicesComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteHomeRoutingModule { }
