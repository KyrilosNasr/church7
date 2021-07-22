import { TestBed } from '@angular/core/testing';

import { MassesService } from './masses.service';

describe('MassesService', () => {
  let service: MassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
