import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardServicesFormComponent } from './dashboard-services-form.component';

describe('DashboardServicesFormComponent', () => {
  let component: DashboardServicesFormComponent;
  let fixture: ComponentFixture<DashboardServicesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardServicesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardServicesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
