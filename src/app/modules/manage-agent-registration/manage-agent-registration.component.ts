import { Component, OnInit, signal } from '@angular/core';

import {
  CdkDrag,
  CdkDragDrop,
  CdkDragStart,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import {
  KanbanColumn,
  KanbanItem,
  KanbanColumnComponent,
  KanbanItemComponent,
} from '../../shared/kanban';
import { createMockColumns } from '../../shared/data';
import { debounceTime, of } from 'rxjs';

@Component({
  selector: 'app-manage-agent-registration',
  standalone: true,
  imports: [
    KanbanColumnComponent,
    KanbanItemComponent,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
  ],
  templateUrl: './manage-agent-registration.component.html',
  styleUrl: './manage-agent-registration.component.scss',
})
export class ManageAgentRegistrationComponent implements OnInit {
  protected columns = signal<KanbanColumn[]>([]);
  protected dragging = signal(false);
  protected draggingColumnId = signal(0);

  public ngOnInit(): void {
    of(createMockColumns())
      .pipe(debounceTime(300))
      .subscribe((res) => {
        console.log(res);

        this.columns.set(res);
      });
  }

  protected canDrop(column: KanbanColumn): boolean {
    return this.dragging() && column.canDrag && !column.isDragging;
  }

  protected cannotDrop(column: KanbanColumn): boolean {
    return this.dragging() && !column.canDrag && !column.isDragging;
  }

  protected listDrop(event: CdkDragDrop<undefined>) {
    const { previousIndex, currentIndex } = event;

    moveItemInArray(this.columns()!, previousIndex, currentIndex);
  }

  public onDragStart(event: CdkDragStart<KanbanItem>) {
    const itemStatus = event.source.data.statusId;
    const itemId = event.source.data.id;

    this.columns.update((state) =>
      state.map((column) => {
        /**
         * Check if the column is already dragged
         */
        column.canDrag = column.allowedStatus.includes(itemStatus);
        column.isDragging = column.tickets.some((item) => item.id === itemId);

        return column;
      })
    );

    this.dragging.set(true);
  }
  public onDragEnd(event: CdkDragStart<any[]>) {
    this.columns.update((state) =>
      state.map((column) => {
        /**
         * Check if the column is already dragged
         */
        column.canDrag = true;
        column.isDragging = false;

        return column;
      })
    );

    this.dragging.set(false);
  }
  protected evenPredicate(
    drag: CdkDrag<KanbanItem>,
    drop: CdkDropList<KanbanColumn>
  ) {
    const itemStatus = drag.data.statusId;

    return drop.data.allowedStatus.includes(itemStatus);
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */

  protected drop(event: CdkDragDrop<KanbanColumn>) {
    const {
      previousIndex,
      currentIndex,
      container,
      previousContainer,
      isPointerOverContainer,
    } = event;

    if (!isPointerOverContainer) {
      return;
    }

    if (container === previousContainer) {
      moveItemInArray(container.data.tickets, previousIndex, currentIndex);
    } else {
      transferArrayItem(
        previousContainer.data.tickets,
        container.data.tickets,
        previousIndex,
        currentIndex
      );
    }
  }
}
