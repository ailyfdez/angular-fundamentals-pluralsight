import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '..';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  newEvent: any;
  isDirty: boolean = true

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEvent(form: any) {
    this.eventService.saveEvent(form);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
