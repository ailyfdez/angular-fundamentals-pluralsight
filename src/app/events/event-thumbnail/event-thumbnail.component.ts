import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClickMe(){
    this.eventClick.emit("casa");
  }
}
