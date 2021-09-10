import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../event-model';
import { EventService } from '../shared/event.service';

declare let toastr:any

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[] = [];

  constructor(private service: EventService, private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(param: any) {
    toastr.success(param);
  }
}
