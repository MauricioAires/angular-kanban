import { Component, computed, inject, input, OnInit } from '@angular/core';
import { KanbanItem } from '../../interfaces/kanban.interface';
import { AvatarModule } from 'primeng/avatar';
import { DialogService } from 'primeng/dynamicdialog';
import { TooltipModule } from 'primeng/tooltip';
import { ItemModalComponent } from '../item-modal/item-modal.component';

const statusMapperColors = {
  Medium: 'bg-yellow-200',
  High: 'bg-red-200',
  Low: 'bg-green-200',
};

const statusMapperText = {
  Medium: 'Media',
  High: 'Alta',
  Low: 'Baixa',
};

@Component({
  selector: 'app-kanban-item',
  standalone: true,
  imports: [AvatarModule, TooltipModule],
  templateUrl: './kanban-item.component.html',
  styleUrl: './kanban-item.component.scss',
})
export class KanbanItemComponent implements OnInit {
  // Services
  private dialogService = inject(DialogService);
  // Inputs
  public item = input.required<KanbanItem>();
  // Properties
  protected color = computed(() => {
    return statusMapperColors[this.item().priority];
  });
  protected statusText = computed(() => {
    return statusMapperText[this.item().priority];
  });

  public ngOnInit(): void {
    // this.openItemModal();
  }

  protected getInitials(fullName: string) {
    const names = fullName.split(' ');

    const firstLetter = names[0].charAt(0).toUpperCase();
    const lastLetter = names[names.length - 1].charAt(0).toUpperCase();

    return firstLetter + lastLetter;
  }

  protected openItemModal(): void {
    this.dialogService.open(ItemModalComponent, {});
  }
}
