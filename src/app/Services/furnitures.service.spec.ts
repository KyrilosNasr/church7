import { TestBed } from '@angular/core/testing';

import { FurnituresService } from './furnitures.service';

describe('FurnituresService', () => {
  let service: FurnituresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FurnituresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
