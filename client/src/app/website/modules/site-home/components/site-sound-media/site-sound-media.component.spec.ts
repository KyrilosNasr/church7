import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSoundMediaComponent } from './site-sound-media.component';

describe('SiteSoundMediaComponent', () => {
  let component: SiteSoundMediaComponent;
  let fixture: ComponentFixture<SiteSoundMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteSoundMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSoundMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
