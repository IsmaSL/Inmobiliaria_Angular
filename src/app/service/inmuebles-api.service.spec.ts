import { TestBed } from '@angular/core/testing';

import { InmueblesAPIService } from './inmuebles-api.service';

describe('InmueblesAPIService', () => {
  let service: InmueblesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmueblesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
