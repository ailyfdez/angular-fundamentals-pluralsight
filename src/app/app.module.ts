import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import {
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailComponent,
  EventCreateComponent,
  EventDetailsResolver,
  EventListResolverService
} from './events/index';
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { SessionListComponent } from './session/session-list/session-list.component';
import { SessionCreateComponent } from './session/session-create/session-create.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { UpvoteComponent } from './session/upvote/upvote.component';
import { VoterService } from './session/voter.service';
import { HttpClientModule } from '@angular/common/http';
import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
import { JQ_TOKEN } from './common/jquery.service';

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
    DurationPipe, UpvoteComponent,],
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
