import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteChurchServicesComponent } from './site-church-services.component';

describe('SiteChurchServicesComponent', () => {
  let component: SiteChurchServicesComponent;
  let fixture: ComponentFixture<SiteChurchServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteChurchServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteChurchServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
