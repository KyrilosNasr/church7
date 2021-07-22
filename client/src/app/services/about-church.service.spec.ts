import { TestBed } from '@angular/core/testing';

import { AboutChurchService } from './about-church.service';

describe('AboutChurchService', () => {
  let service: AboutChurchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutChurchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
