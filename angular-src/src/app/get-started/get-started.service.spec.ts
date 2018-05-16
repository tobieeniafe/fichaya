import { TestBed, inject } from '@angular/core/testing';

import { GetStartedService } from './get-started.service';

describe('GetStartedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetStartedService]
    });
  });

  it('should be created', inject([GetStartedService], (service: GetStartedService) => {
    expect(service).toBeTruthy();
  }));
});
