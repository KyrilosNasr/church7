import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMassCalenderComponent } from './site-mass-calender.component';

describe('SiteMassCalenderComponent', () => {
  let component: SiteMassCalenderComponent;
  let fixture: ComponentFixture<SiteMassCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMassCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMassCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
