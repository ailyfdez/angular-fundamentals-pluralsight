import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventService } from 'src/app/services';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService {

  constructor(private eventService: EventService) { }

  resolve() {
    return this.eventService.getEvents().pipe(map(events => events))
  }
}
