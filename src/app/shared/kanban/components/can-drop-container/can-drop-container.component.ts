import { Component, input } from '@angular/core';

@Component({
  selector: 'app-can-drop-container',
  standalone: true,
  imports: [],
  templateUrl: './can-drop-container.component.html',
  styleUrl: './can-drop-container.component.scss',
  host: {
    class:
      'bg-blue-100 border-1 border-blue-400 w-full justify-content-center align-items-center pointer-events-none flex border-round-lg p-3 z-4',
  },
})
export class CanDropContainerComponent {
  public columnTitle = input.required<string>();
}
