import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <gifts-manager></gifts-manager>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}


// things to fix:
// 1) make filter work
// 2) make all cards show without div seperation.
