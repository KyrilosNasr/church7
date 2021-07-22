import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHomeSeperatorComponent } from './site-home-seperator.component';

describe('SiteHomeSeperatorComponent', () => {
  let component: SiteHomeSeperatorComponent;
  let fixture: ComponentFixture<SiteHomeSeperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteHomeSeperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteHomeSeperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
