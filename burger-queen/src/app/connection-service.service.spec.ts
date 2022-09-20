import { TestBed } from '@angular/core/testing';

import { ConnectionServiceService } from './connection-service.service';

describe('ConnectionServiceService', () => {
  let service: ConnectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
