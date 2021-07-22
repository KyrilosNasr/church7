import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConfessionFormComponent } from './dashboard-confession-form.component';

describe('DashboardConfessionFormComponent', () => {
  let component: DashboardConfessionFormComponent;
  let fixture: ComponentFixture<DashboardConfessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardConfessionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConfessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
