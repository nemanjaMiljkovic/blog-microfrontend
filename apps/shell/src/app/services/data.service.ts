import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../domains/posts/entity';
import { User } from '../state/app.state';
import { AppState } from '../state/app.state';
import { Observable, tap } from 'rxjs';

interface PostsResponse {
  posts: Post[];
}

interface UsersResponse {
  users: User[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient,
    private appState: AppState
  ) {}

  fetchPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>('/api/posts').pipe(
      tap(response => this.appState.setPosts(response.posts))
    );
  }

  fetchUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>('/api/users').pipe(
      tap(response => this.appState.setUsers(response.users))
    );
  }
}
