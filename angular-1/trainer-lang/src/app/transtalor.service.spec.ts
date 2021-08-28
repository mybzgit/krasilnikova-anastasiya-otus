import { TestBed } from '@angular/core/testing';

import { TranstalorService } from './transtalor.service';

describe('TranstalorService', () => {
  let service: TranstalorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranstalorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
