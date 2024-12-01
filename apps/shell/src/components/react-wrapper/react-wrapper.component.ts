import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemote } from '@module-federation/enhanced/runtime';

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  templateUrl: './react-wrapper.component.html',
  styleUrl: './react-wrapper.component.css',
})
export class ReactWrapperComponent implements OnInit {
  async ngOnInit() {
    await loadRemote('admin/Module');
  }
}
