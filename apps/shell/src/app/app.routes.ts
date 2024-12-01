import { NxWelcomeComponent } from './nx-welcome.component';
import { ReactWrapperComponent } from '../components/react-wrapper/react-wrapper.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'admin',
    component: ReactWrapperComponent,
  }
];
