import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsResolver } from './events';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventListResolverService } from './events/shared/event-list-resolver.service';

export const routes: Routes = [
  { path: "events", component: EventsListComponent, resolve: { events: EventListResolverService } },
  {
    path:"events/new",
    component:EventCreateComponent,
  },
  {
    path: "events/:id",
    component: EventDetailComponent,
    resolve: { event: EventDetailsResolver } 
  },
  {path:"user", loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: "", redirectTo: "/events", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
