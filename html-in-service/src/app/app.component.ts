import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-message-service-virtual-ref></app-message-service-virtual-ref>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
