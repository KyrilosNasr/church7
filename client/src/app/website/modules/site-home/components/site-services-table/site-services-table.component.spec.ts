import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteServicesTableComponent } from './site-services-table.component';

describe('SiteServicesTableComponent', () => {
  let component: SiteServicesTableComponent;
  let fixture: ComponentFixture<SiteServicesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteServicesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteServicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
