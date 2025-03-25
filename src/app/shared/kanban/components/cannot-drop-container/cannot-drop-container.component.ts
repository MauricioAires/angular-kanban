import { Component } from '@angular/core';

@Component({
  selector: 'app-cannot-drop-container',
  standalone: true,
  imports: [],
  templateUrl: './cannot-drop-container.component.html',
  styleUrl: './cannot-drop-container.component.scss',
  host: {
    class:
      'bg-gray-100 absolute sticky pointer-events-none flex border-round-lg p-3 z-5 justify-content-center align-items-center left-0 right-0 top-0 bottom-0',
  },
})
export class CannotDropContainerComponent {}
