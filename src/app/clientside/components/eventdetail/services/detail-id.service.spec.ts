import { TestBed } from '@angular/core/testing';

import { DetailIdService } from './detail-id.service';

describe('DetailIdService', () => {
  let service: DetailIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
