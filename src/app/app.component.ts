import { Component } from '@angular/core';

import { MyRedditComponent } from './my-reddit/my-reddit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Reddit Client';
}
