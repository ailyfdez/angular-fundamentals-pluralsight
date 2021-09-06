import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <navbar></navbar>
  <events-list></events-list>`
})
export class AppComponent {
  title = 'ng-fundamentals';
}
