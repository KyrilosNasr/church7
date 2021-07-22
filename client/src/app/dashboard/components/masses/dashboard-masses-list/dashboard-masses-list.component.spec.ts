import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMassesListComponent } from './dashboard-masses-list.component';

describe('DashboardMassesListComponent', () => {
  let component: DashboardMassesListComponent;
  let fixture: ComponentFixture<DashboardMassesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMassesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMassesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
