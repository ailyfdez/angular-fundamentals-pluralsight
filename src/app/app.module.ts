import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventCreateComponent } from './events/event-create/event-create.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    EventCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
