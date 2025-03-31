import { Component, input } from '@angular/core';
import { CanDropContainerComponent } from '../can-drop-container/can-drop-container.component';
import { CannotDropContainerComponent } from '../cannot-drop-container/cannot-drop-container.component';

@Component({
  selector: 'app-kanban-column',
  standalone: true,
  imports: [CanDropContainerComponent, CannotDropContainerComponent],
  templateUrl: './kanban-column.component.html',
  styleUrl: './kanban-column.component.scss',
})
export class KanbanColumnComponent {
  public canDrop = input();
  public cannotDrop = input();
  public columnTitle = input<string>('');
}
