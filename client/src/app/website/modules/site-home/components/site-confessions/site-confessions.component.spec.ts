import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteConfessionsComponent } from './site-confessions.component';

describe('SiteConfessionsComponent', () => {
  let component: SiteConfessionsComponent;
  let fixture: ComponentFixture<SiteConfessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteConfessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteConfessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
