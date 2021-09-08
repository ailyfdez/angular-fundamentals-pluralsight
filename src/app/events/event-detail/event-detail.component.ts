import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any;
  reviewed:boolean=true;

  constructor(private service: EventService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.service.getEvent(this.route.snapshot.params['id']);
  }

}
