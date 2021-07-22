import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConfessionsListComponent } from './dashboard-confessions-list.component';

describe('DashboardConfessionsListComponent', () => {
  let component: DashboardConfessionsListComponent;
  let fixture: ComponentFixture<DashboardConfessionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardConfessionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConfessionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
