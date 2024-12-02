import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { AppState, PostWithAuthor } from '../../app/state/app.state';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterLink, PostComponent],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: PostWithAuthor[] = [];

  constructor(private appState: AppState) {}

  ngOnInit() {
    this.appState.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log('Posts from state:', this.posts);
    });
  }
}
