import { TestBed, inject } from '@angular/core/testing';

import { BookingHistoryService } from './booking-history.service';

describe('BookingHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingHistoryService]
    });
  });

  it('should be created', inject([BookingHistoryService], (service: BookingHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
