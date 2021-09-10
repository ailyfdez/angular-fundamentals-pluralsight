import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../event-model';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: IEvent | undefined;
  reviewed:boolean=true;

  constructor(private service: EventService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.route.snapshot.data['event']
  }

}
