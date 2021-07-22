import { TestBed } from '@angular/core/testing';

import { ImageAssetsService } from './image-assets.service';

describe('ImageAssetsService', () => {
  let service: ImageAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
