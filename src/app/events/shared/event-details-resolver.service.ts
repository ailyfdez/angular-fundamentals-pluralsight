import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router'
import { map } from 'rxjs/operators'
import { EventService } from '../shared/event.service'

@Injectable({
  providedIn: 'root'
})

export class EventDetailsResolver implements Resolve<any> {
  constructor(private eventService:EventService, private router:Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(+route.params['id']).pipe(map((event: any)=> {
        if (event) {
          return event
        } else {
          this.router.navigate(['/404'])
        }
      }))
  }
}