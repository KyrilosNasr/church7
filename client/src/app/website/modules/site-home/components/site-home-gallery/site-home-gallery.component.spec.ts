import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHomeGalleryComponent } from './site-home-gallery.component';

describe('SiteHomeGalleryComponent', () => {
  let component: SiteHomeGalleryComponent;
  let fixture: ComponentFixture<SiteHomeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteHomeGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteHomeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
