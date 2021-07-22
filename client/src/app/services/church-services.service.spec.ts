import { TestBed } from '@angular/core/testing';

import { ChurchServicesService } from './church-services.service';

describe('ChurchServicesService', () => {
  let service: ChurchServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChurchServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
