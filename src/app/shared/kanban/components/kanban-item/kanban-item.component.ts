import { Component, computed, inject, input, OnInit } from '@angular/core';
import { KanbanItem } from '../../interfaces/kanban.interface';
import { AvatarModule } from 'primeng/avatar';
import { DialogService } from 'primeng/dynamicdialog';
import { TooltipModule } from 'primeng/tooltip';
import { ItemModalComponent } from '../item-modal/item-modal.component';
import { DateFnsHelper } from '../../helpers/date-fns-helper';

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
  public item = input.required<KanbanItem | null>();
  // Properties

  protected statusURL = computed(() => {
    return `./assets/images/icons/priorities/${this.item()?.priority}.svg`;
  });

  protected formatDistance = computed(() => {
    if (this.item() === null) {
      return '';
    }

    return DateFnsHelper.formatDistanceStrict({
      date: this.item()!.createdAt,
    });
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
