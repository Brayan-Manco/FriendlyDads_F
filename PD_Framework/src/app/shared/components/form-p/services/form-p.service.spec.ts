import { TestBed } from '@angular/core/testing';

import { FormPService } from './form-p.service';

describe('FormPService', () => {
  let service: FormPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
