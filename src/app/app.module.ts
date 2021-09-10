import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent }  from './app.component'
import { EventService,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailComponent,
  EventCreateComponent,
  EventDetailsResolver,
  EventListResolverService} from './events/index';
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule],
  declarations: [ 
    AppComponent, 
    EventsListComponent,
    EventThumbnailComponent, 
    NavbarComponent,
    EventDetailComponent,
    EventCreateComponent],
  providers: [
    EventService, 
    EventDetailsResolver,
    EventListResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState     
    }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

function checkDirtyState(component:EventCreateComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, Do you really want to cancel?') 

  return true
}
