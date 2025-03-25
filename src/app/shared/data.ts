import { KanbanColumn } from './kanban';
import { faker } from '@faker-js/faker/locale/pt_BR';

export function createMockColumns(): KanbanColumn[] {
  /**
   * 1. O ID da coluna é diferente to status
   * 2. Precisa existir sempre um status com o mesmo nome da coluna para definir ele
   * quando o card for movido para a coluna ou pode ser configurado um status padrão que
   * sempre que o card for movido para a coluna setar esse status no card
   */

  const column = createMockStatus();

  return [
    {
      id: faker.string.uuid(),
      title: 'Triagem',
      tickets: Array(4)
        .fill(0)
        .map(() => cerateTask(column.map((c) => c.id))),
      allowedStatus: column.slice(0, 2).map((c) => c.id),
      canDrag: true,
      isDragging: false,
    },
    {
      id: faker.string.uuid(),
      title: 'Modelo de comissão',
      tickets: Array(3)
        .fill(0)
        .map(() => cerateTask(column.map((c) => c.id))),
      allowedStatus: column.slice(2, 4).map((c) => c.id),
      canDrag: true,
      isDragging: false,
    },
    {
      id: faker.string.uuid(),
      title: 'Documentação - Agente',
      tickets: Array(3)
        .fill(0)
        .map(() => cerateTask(column.map((c) => c.id))),
      allowedStatus: column.slice(3, 6).map((c) => c.id),
      canDrag: true,
      isDragging: false,
    },
    {
      id: faker.string.uuid(),
      title: 'Documentação - Empresa',
      tickets: Array(3)
        .fill(0)
        .map(() => cerateTask(column.map((c) => c.id))),
      allowedStatus: column.slice(3, 6).map((c) => c.id),
      canDrag: true,
      isDragging: false,
    },
  ];
}

function createMockStatus() {
  return [
    {
      id: faker.string.uuid(),
      title: 'Triagem',
      color: '#F44336',
    },
    {
      id: faker.string.uuid(),
      title: 'Modelo de comissão',
      color: '#F44336',
    },
    {
      id: faker.string.uuid(),
      title: 'Documentação',
      color: '#F44336',
    },
    {
      id: faker.string.uuid(),
      title: 'Documentação - Empresa',
      color: '#F44336',
    },
    {
      id: faker.string.uuid(),
      title: 'Documentação - Agente',
      color: '#F44336',
    },
    {
      id: faker.string.uuid(),
      title: 'Documentação - Responsável legal',
      color: '#F44336',
    },
  ];
}

function cerateTask(status: string[]) {
  return {
    id: faker.string.uuid(),
    statusId: faker.helpers.arrayElement(status),
    title: faker.person.fullName(),
    description: faker.lorem.sentence(),
    assignee: faker.person.fullName(),
    priority: faker.helpers.arrayElement(['High', 'Low', 'Medium']),
  };
}

/**
 * Adicionar responsável pelo cadastro, nome do responsável
 */
