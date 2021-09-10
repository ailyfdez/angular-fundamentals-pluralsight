import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvent } from '../event-model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent={id:0,name:"",date:new Date, time:""};
  @Output() eventClick= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
