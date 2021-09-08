import { TestBed } from '@angular/core/testing';

import { EventDetailActivatorGuard } from './event-detail-activator.guard';

describe('EventDetailActivatorGuard', () => {
  let guard: EventDetailActivatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventDetailActivatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
