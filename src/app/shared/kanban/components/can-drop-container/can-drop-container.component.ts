import { Component, input } from '@angular/core';

@Component({
  selector: 'app-can-drop-container',
  standalone: true,
  imports: [],
  templateUrl: './can-drop-container.component.html',
  styleUrl: './can-drop-container.component.scss',
})
export class CanDropContainerComponent {
  public columnTitle = input.required<string>();
}
