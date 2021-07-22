import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFathersComponent } from './dashboard-fathers.component';

describe('DashboardFathersComponent', () => {
  let component: DashboardFathersComponent;
  let fixture: ComponentFixture<DashboardFathersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFathersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFathersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
