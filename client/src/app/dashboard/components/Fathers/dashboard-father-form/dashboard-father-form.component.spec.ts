import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFatherFormComponent } from './dashboard-father-form.component';

describe('DashboardFatherFormComponent', () => {
  let component: DashboardFatherFormComponent;
  let fixture: ComponentFixture<DashboardFatherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFatherFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFatherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
