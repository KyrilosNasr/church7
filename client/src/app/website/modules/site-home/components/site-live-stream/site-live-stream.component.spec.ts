import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLiveStreamComponent } from './site-live-stream.component';

describe('SiteLiveStreamComponent', () => {
  let component: SiteLiveStreamComponent;
  let fixture: ComponentFixture<SiteLiveStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteLiveStreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLiveStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
