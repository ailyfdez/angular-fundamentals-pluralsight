import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvent } from '../event-model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input()  event!: IEvent;
  @Output() eventClick= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
