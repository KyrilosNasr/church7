import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordMassesFormComponent } from './dashbord-masses-form.component';

describe('DashbordMassesFormComponent', () => {
  let component: DashbordMassesFormComponent;
  let fixture: ComponentFixture<DashbordMassesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordMassesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordMassesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
