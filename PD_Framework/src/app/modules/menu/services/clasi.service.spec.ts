import { TestBed } from '@angular/core/testing';

import { ClasiService } from './clasi.service';

describe('InformacionService', () => {
  let service: ClasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
