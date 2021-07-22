import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySectionFormComponent } from './gallery-section-form.component';

describe('GallerySectionFormComponent', () => {
  let component: GallerySectionFormComponent;
  let fixture: ComponentFixture<GallerySectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerySectionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
