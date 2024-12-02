import { ReactWrapperComponent } from '../components/react-wrapper/react-wrapper.component';
import { Route } from '@angular/router';
import { PostsComponent } from '../components/posts/posts.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'admin/:postId',
    component: ReactWrapperComponent,
  },
  {
    path: 'admin',
    component: ReactWrapperComponent,
  },
];
