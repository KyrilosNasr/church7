import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAboutChurchComponent } from './site-about-church.component';

describe('SiteAboutChurchComponent', () => {
  let component: SiteAboutChurchComponent;
  let fixture: ComponentFixture<SiteAboutChurchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteAboutChurchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAboutChurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
