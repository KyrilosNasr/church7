import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchMeetingsListComponent } from './church-meetings-list.component';

describe('ChurchMeetingsListComponent', () => {
  let component: ChurchMeetingsListComponent;
  let fixture: ComponentFixture<ChurchMeetingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchMeetingsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchMeetingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
