import { Component, input } from '@angular/core';

@Component({
  selector: 'app-can-drop-container',
  standalone: true,
  imports: [],
  templateUrl: './can-drop-container.component.html',
  styleUrl: './can-drop-container.component.scss',
  host: {
    class:
      'absolute sticky pointer-events-none flex border-round-lg p-3 z-5 border-1 border-blue-400 justify-content-center align-items-center bg-blue-100 left-0 right-0 top-0 bottom-0',
  },
})
export class CanDropContainerComponent {
  public columnTitle = input.required<string>();
}
