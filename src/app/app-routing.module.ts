import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventDetailActivatorGuard } from './events/event-detail-activator.guard';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventListResolverService } from './events/shared/event-list-resolver.service';

const routes: Routes = [
  { path: "events", component: EventsListComponent, resolve: { events: EventListResolverService } },
  {
    path:"events/new",
    component:EventCreateComponent,
  },
  {
    path: "events/:id",
    component: EventDetailComponent,
    canActivate: [EventDetailActivatorGuard],
    canDeactivate: [EventDetailActivatorGuard]
  },
  
  { path: "", redirectTo: "/events", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
