import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVideosCarouselComponent } from './site-videos-carousel.component';

describe('SiteVideosCarouselComponent', () => {
  let component: SiteVideosCarouselComponent;
  let fixture: ComponentFixture<SiteVideosCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteVideosCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVideosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
