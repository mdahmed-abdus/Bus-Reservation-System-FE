import { TestBed } from '@angular/core/testing';

import { CheckBusService } from './check-bus.service';

describe('CheckBusService', () => {
  let service: CheckBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
