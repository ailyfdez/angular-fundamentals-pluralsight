import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

declare let toastr:any

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(private service: EventService) { }


  ngOnInit(): void {
    this.events = this.service.getEvents();
  }

  handleThumbnailClick(param: any) {
    toastr.success(param);
  }
}
