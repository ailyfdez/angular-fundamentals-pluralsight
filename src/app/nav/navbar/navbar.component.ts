import { Component, OnInit } from '@angular/core';
import { ISession } from 'src/app/events/event-model';
import { EventService } from 'src/app/services';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";
  foundSessions!: ISession[];

  constructor(public  auth: AuthService,private eventService: EventService) { }

  ngOnInit(): void {
  }

  searchSessions(searchTerm: any) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions: ISession[]) => {
        this.foundSessions = sessions;
    })
}
}
