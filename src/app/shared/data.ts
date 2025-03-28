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
      count: faker.number.int({
        min: 10,
        max: 100,
      }),
      title: 'Cadastro Agente',
      tickets: Array(40)
        .fill(0)
        .map(() => cerateTask(column.map((c) => c.id))),
      allowedStatus: column.slice(0, 2).map((c) => c.id),
      canDrag: true,
      isDragging: false,
    },
    {
      id: faker.string.uuid(),
      count: faker.number.int({
        min: 10,
        max: 100,
      }),
      title: 'Modelo de comissão',
      tickets: Array(32)
        .fill(0)
        .map(() => cerateTask(column.map((c) => c.id))),
      allowedStatus: column.slice(2, 4).map((c) => c.id),
      canDrag: true,
      isDragging: false,
    },
    {
      id: faker.string.uuid(),
      count: faker.number.int({
        min: 10,
        max: 100,
      }),
      title: 'Empresa',
      tickets: Array(3)
        .fill(0)
        .map(() => cerateTask(column.map((c) => c.id))),
      allowedStatus: column.slice(3, 6).map((c) => c.id),
      canDrag: true,
      isDragging: false,
    },
    {
      id: faker.string.uuid(),
      title: 'Contrato',
      count: faker.number.int({
        min: 10,
        max: 100,
      }),
      tickets: Array(3)
        .fill(0)
        .map(() => cerateTask(column.map((c) => c.id))),
      allowedStatus: column.slice(3, 6).map((c) => c.id),
      canDrag: true,
      isDragging: false,
    },
    {
      id: faker.string.uuid(),
      title: 'Primeira Operação',
      count: faker.number.int({
        min: 10,
        max: 100,
      }),
      tickets: Array(3)
        .fill(0)
        .map(() => cerateTask(column.map((c) => c.id))),
      allowedStatus: column.slice(3, 6).map((c) => c.id),
      canDrag: true,
      isDragging: false,
    },
    {
      id: faker.string.uuid(),
      title: 'Inativo',
      count: faker.number.int({
        min: 10,
        max: 100,
      }),
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
    document: faker.helpers.arrayElement([
      '123.456.789-09',
      '987.654.321-00',
      '456.789.123-77',
      '321.654.987-33',
      '159.753.486-22',
      '753.951.258-44',
      '852.147.963-55',
      '369.258.147-66',
      '741.852.963-11',
    ]),
    title: faker.person.fullName(),
    description: faker.lorem.sentence(),
    assignee: faker.person.fullName(),
    createdAt: faker.date.future({
      refDate: new Date(),
    }),
    branch: faker.helpers.arrayElement([
      'FILIAL-BHT',
      'FILIAL-CMC',
      'FILIAL-GOT',
      'FILIAL-INT',
      'FILIAL-MDT',
      'FILIAL-MGT',
      'FILIAL-NET',
      'FILIAL-P2T',
      'FILIAL-PRT',
      'FILIAL-RST',
      'FILIAL-S2T',
      'FILIAL-SPT',
      'FILIAL-UNBOX',
      'FILIAL-WFT',
    ]),
    priority: faker.helpers.arrayElement([
      'blocker',
      'critical',
      'high',
      'highest',
      'low',
      'medium',
      'trivial',
    ]),
  };
}

/**
 * Adicionar responsável pelo cadastro, nome do responsável
 */
