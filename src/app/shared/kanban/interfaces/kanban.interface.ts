export interface KanbanColumn {
  id: number;
  title: string;
  tickets: KanbanItem[];
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
  priority: 'High' | 'Medium' | 'Low';
}
