import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number = 0;
  @Input() set voted(val: any) {
    this.iconColour = val ? 'red' : 'white'
  }
  @Output() vote = new EventEmitter();
  iconColour: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.vote.emit({});
  }

}
