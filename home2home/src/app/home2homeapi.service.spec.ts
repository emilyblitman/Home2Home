import { TestBed } from '@angular/core/testing';

import { Home2homeapiService } from './home2homeapi.service';

describe('Home2homeapiService', () => {
  let service: Home2homeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Home2homeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
