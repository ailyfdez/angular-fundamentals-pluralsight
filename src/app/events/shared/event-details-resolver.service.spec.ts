import { TestBed } from '@angular/core/testing';

import { EventDetailsResolverService } from './event-details-resolver.service';

describe('EventDetailsResolverService', () => {
  let service: EventDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
