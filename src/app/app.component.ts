import { Component, signal } from '@angular/core';

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
} from './shared/kanban';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    KanbanColumnComponent,
    KanbanItemComponent,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected columns = signal<KanbanColumn[]>([
    {
      id: 1,
      title: 'A fazer',
      tickets: [
        {
          id: 'task-1',
          statusId: 'TODO',
          title: 'Configurar entorno de desarrollo',
          description:
            'Instalar Angular, configurar Bun y verificar dependencias',
          assignee: 'Juan Pérez',
          priority: 'High',
        },
        {
          id: 'task-2',
          statusId: 'TODO',
          title: 'Diseñar estructura del proyecto',
          description: 'Definir módulos, componentes y servicios necesarios',
          assignee: 'Ana Gómez',
          priority: 'Medium',
        },
        {
          id: 'task-5',
          statusId: 'TODO',
          title: 'Configurar autenticación',
          description:
            'Investigar opciones de autenticación y definir la estrategia',
          assignee: 'Luis Herrera',
          priority: 'High',
        },
        {
          id: 'task-6',
          statusId: 'TODO',
          title: 'Crear prototipo UI',
          description:
            'Diseñar un prototipo en Figma para la interfaz de usuario',
          assignee: 'Carla Mendoza',
          priority: 'Medium',
        },
      ],
      allowedStatus: ['TODO'],
      canDrag: true,
      isDragging: false,
    },
    {
      id: 2,
      title: 'Desenvolvimento',
      tickets: [
        {
          id: 'task-3',
          statusId: 'IN-PROGRESS',
          title: 'Crear componentes básicos',
          description: 'Desarrollar los componentes iniciales del sistema',
          assignee: 'Carlos López',
          priority: 'High',
        },
        {
          id: 'task-7',
          statusId: 'IN-PROGRESS',
          title: 'Implementar API REST',
          description:
            'Desarrollar el backend con NestJS y configurar endpoints',
          assignee: 'Ricardo Fernández',
          priority: 'High',
        },
        {
          id: 'task-8',
          statusId: 'IN-PROGRESS',
          title: 'Crear el sistema de drag and drop',
          description:
            'Implementar funcionalidad de arrastrar y soltar con Angular CDK',
          assignee: 'Sofía Martínez',
          priority: 'Medium',
        },
      ],
      allowedStatus: ['TODO', 'IN-PROGRESS'],
      canDrag: true,
      isDragging: false,
    },
    {
      id: 3,
      title: 'Finalizado',
      tickets: [
        {
          id: 'task-4',
          statusId: 'DONE',
          title: 'Definir requerimientos',
          description:
            'Reunión con el equipo para establecer alcance del proyecto',
          assignee: 'María Rodríguez',
          priority: 'Low',
        },
        {
          id: 'task-9',
          statusId: 'DONE',
          title: 'Configurar repositorio Git',
          description:
            'Crear repositorio en GitHub y establecer buenas prácticas',
          assignee: 'Fernando Ríos',
          priority: 'Low',
        },
        {
          id: 'task-10',
          statusId: 'DONE',
          title: 'Definir arquitectura de software',
          description:
            'Establecer patrones de diseño y buenas prácticas de código',
          assignee: 'Elena Castro',
          priority: 'High',
        },
      ],
      allowedStatus: ['IN-PROGRESS', 'DONE'],
      canDrag: true,
      isDragging: false,
    },
  ]);
  protected dragging = signal(false);
  protected draggingColumnId = signal(0);

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
    const { previousIndex, currentIndex, container, previousContainer } = event;

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
