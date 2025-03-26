import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-item-modal',
  standalone: true,
  imports: [ButtonModule, DialogModule],
  templateUrl: './item-modal.component.html',
  styleUrl: './item-modal.component.scss',
})
export class ItemModalComponent {
  // Services
  private ref = inject(DynamicDialogRef);

  protected close(success: boolean = false): void {
    this.ref.close(success);
  }
}
