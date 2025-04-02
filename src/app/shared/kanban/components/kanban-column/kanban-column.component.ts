import {
  Component,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2,
  viewChild,
  viewChildren,
} from '@angular/core';
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
  private renderer2 = inject(Renderer2);

  public canDrop = input();
  public cannotDrop = input();
  public columnTitle = input<string>('');
  public visibleHeight = input<number>(0);

  protected canDropContainerComponentRef = viewChild(
    CanDropContainerComponent,
    {
      read: ElementRef,
    }
  );
  protected cannotDropContainerComponentRef = viewChild(
    CannotDropContainerComponent,
    {
      read: ElementRef,
    }
  );

  #canDropContainerComponentRef = effect(() => {
    if (this.canDropContainerComponentRef()) {
      this.renderer2.setStyle(
        this.canDropContainerComponentRef()!.nativeElement,
        'height',
        `${this.visibleHeight() - 47}px`
      );
    }
    if (this.cannotDropContainerComponentRef()) {
      this.renderer2.setStyle(
        this.cannotDropContainerComponentRef()!.nativeElement,
        'height',
        `${this.visibleHeight() - 47}px`
      );
    }
  });
}
