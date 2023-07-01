import { TestBed } from '@angular/core/testing';

import { FormPerService } from './form-per.service';

describe('FormPerService', () => {
  let service: FormPerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
