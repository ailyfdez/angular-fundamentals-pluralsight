import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services';
import { IEvent, ISession } from '../event-model';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event!: IEvent;
  addMode: boolean=false;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private service: EventService, private route:ActivatedRoute) { }

  ngOnInit() {
    // Subscribe to the params to check for re-routes to the same component.
    // When the route to self is called, we need to reset all component states to original.
    this.route.data.forEach((data) => {
        this.event = data['event'];
        this.resetState();
    });
  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session:ISession) {
    const nextId = Math.max.apply(null, this.event.sessions?.map(s => s.id)??[]);
    session.id = nextId + 1
    this.event.sessions?.push(session)
    this.service.saveEvent(this.event);
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }

  resetState() {
    this.addMode = false;
  }
}
