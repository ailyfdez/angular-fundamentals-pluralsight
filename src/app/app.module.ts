import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailComponent,
  EventCreateComponent,
  EventDetailsResolver,
  EventListResolverService
} from './events';
import { NavbarComponent } from './nav/navbar/navbar.component';
import {
  SessionListComponent, SessionCreateComponent
} from './session'
import { DurationPipe } from './events/shared/duration.pipe';
import {
  UpvoteComponent
} from './session'
import { VoterService, EventService, AuthService } from './services';
import {
  Toastr, TOASTR_TOKEN, JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective
} from './common';

let toastr: Toastr = (window as any)['toastr'];
let jQuery: Object = (window as any)['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    EventCreateComponent,
    CollapsibleWellComponent,
    SessionListComponent,
    SessionCreateComponent,
    DurationPipe,
    UpvoteComponent,
    SimpleModalComponent,
    ModalTriggerDirective,],
  providers: [
    EventService,
    EventDetailsResolver,
    EventListResolverService,
    AuthService,
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: TOASTR_TOKEN, useValue: toastr },
    VoterService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: EventCreateComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, Do you really want to cancel?')

  return true
}
