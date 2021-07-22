import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEventsCarouselComponent } from './site-events-carousel.component';

describe('SiteEventsCarouselComponent', () => {
  let component: SiteEventsCarouselComponent;
  let fixture: ComponentFixture<SiteEventsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteEventsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteEventsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
