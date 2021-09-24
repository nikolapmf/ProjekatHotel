import { TestBed } from '@angular/core/testing';

import { SobaService } from './soba.service';

describe('SobaService', () => {
  let service: SobaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SobaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
