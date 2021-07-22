import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteIntroComponent } from './site-intro.component';

describe('SiteIntroComponent', () => {
  let component: SiteIntroComponent;
  let fixture: ComponentFixture<SiteIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
