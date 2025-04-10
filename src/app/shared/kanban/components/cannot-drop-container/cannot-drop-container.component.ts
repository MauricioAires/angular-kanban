import { Component } from '@angular/core';

@Component({
  selector: 'app-cannot-drop-container',
  standalone: true,
  imports: [],
  templateUrl: './cannot-drop-container.component.html',
  styleUrl: './cannot-drop-container.component.scss',
  host: {
    class:
      'bg-gray-100 w-full justify-content-center align-items-center pointer-events-none flex border-round-lg p-3 z-4',
  },
})
export class CannotDropContainerComponent {}
