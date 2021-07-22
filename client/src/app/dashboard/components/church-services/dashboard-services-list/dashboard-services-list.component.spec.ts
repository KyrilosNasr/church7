import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardServicesListComponent } from './dashboard-services-list.component';

describe('DashboardServicesListComponent', () => {
  let component: DashboardServicesListComponent;
  let fixture: ComponentFixture<DashboardServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardServicesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
