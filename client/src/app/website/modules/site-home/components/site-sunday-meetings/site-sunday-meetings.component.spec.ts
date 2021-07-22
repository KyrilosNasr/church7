import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSundayMeetingsComponent } from './site-sunday-meetings.component';

describe('SiteSundayMeetingsComponent', () => {
  let component: SiteSundayMeetingsComponent;
  let fixture: ComponentFixture<SiteSundayMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteSundayMeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSundayMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
