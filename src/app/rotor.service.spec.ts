import { TestBed } from '@angular/core/testing';

import { RotorService } from './rotor.service';

describe('RotorService', () => {
  let service: RotorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
