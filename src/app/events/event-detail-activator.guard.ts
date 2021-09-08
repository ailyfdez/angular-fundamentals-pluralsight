import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './shared/event.service';
import {EventDetailComponent} from './event-detail/event-detail.component'


@Injectable({
  providedIn: 'root'
})
export class EventDetailActivatorGuard implements CanActivate {
  constructor(private eventService:EventService){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let event = this.eventService.getEvent(+route.params['id'])

      return !!event
  }

  canDeactivate(component:EventDetailComponent) {
    return component.reviewed
  }
  
}
