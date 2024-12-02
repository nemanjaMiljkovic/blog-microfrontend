import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { init } from '@module-federation/enhanced/runtime';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { AppState } from './state/app.state';
import { finalize } from 'rxjs';

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
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isLoadingUsers = false;
  isLoadingPosts = false;

  constructor(
    private dataService: DataService,
    private appState: AppState
  ) {}

  ngOnInit() {
    this.loadInitialData();
  }

  private loadInitialData() {
    // Load users first
    this.isLoadingUsers = true;
    this.dataService.fetchUsers()
      .pipe(finalize(() => this.isLoadingUsers = false))
      .subscribe({
        error: (error) => console.error('Error fetching users:', error)
      });

    // Then load posts
    this.isLoadingPosts = true;
    this.dataService.fetchPosts()
      .pipe(finalize(() => this.isLoadingPosts = false))
      .subscribe({
        error: (error) => console.error('Error fetching posts:', error)
      });
  }
}
