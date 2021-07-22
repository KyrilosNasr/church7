import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchMeetingsFormComponent } from './church-meetings-form.component';

describe('ChurchMeetingsFormComponent', () => {
  let component: ChurchMeetingsFormComponent;
  let fixture: ComponentFixture<ChurchMeetingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchMeetingsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchMeetingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
