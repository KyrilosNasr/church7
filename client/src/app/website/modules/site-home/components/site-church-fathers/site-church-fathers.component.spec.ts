import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteChurchFathersComponent } from './site-church-fathers.component';

describe('SiteChurchFathersComponent', () => {
  let component: SiteChurchFathersComponent;
  let fixture: ComponentFixture<SiteChurchFathersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteChurchFathersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteChurchFathersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
