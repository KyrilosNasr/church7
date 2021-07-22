import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAboutChurchComponent } from './dashboard-about-church.component';

describe('DashboardAboutChurchComponent', () => {
  let component: DashboardAboutChurchComponent;
  let fixture: ComponentFixture<DashboardAboutChurchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAboutChurchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAboutChurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
