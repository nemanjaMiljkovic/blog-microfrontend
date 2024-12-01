import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {init} from '@module-federation/enhanced/runtime';

init({
  name: 'shell',
  remotes: [
    {
      name: 'admin',
      entry: 'http://localhost:4201/remoteEntry.js',
    },
  ],
});


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
}
