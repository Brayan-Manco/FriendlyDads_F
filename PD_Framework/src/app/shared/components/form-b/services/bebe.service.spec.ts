import { TestBed } from '@angular/core/testing';

import { BebeService } from './bebe.service';

describe('BebeService', () => {
  let service: BebeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BebeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
