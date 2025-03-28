export interface KanbanColumn {
  id: string;
  title: string;
  tickets: KanbanItem[];
  count: number;
  allowedStatus: string[];
  canDrag: boolean;
  isDragging: boolean;
}

export interface KanbanItem {
  id: string;
  statusId: string;
  title: string;
  description: string;
  assignee: string;
  branch: string;
  createdAt: Date;
  document: string;
  priority:
    | 'blocker'
    | 'critical'
    | 'high'
    | 'highest'
    | 'low'
    | 'medium'
    | 'trivial';
}

/**
 * adicionar LinkedIn
 *
 */
