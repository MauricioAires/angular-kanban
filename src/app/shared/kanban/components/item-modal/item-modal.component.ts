import { Component, effect, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';

import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-item-modal',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,

    FormsModule,
    AvatarModule,
    AccordionModule,
  ],
  templateUrl: './item-modal.component.html',
  styleUrl: './item-modal.component.scss',
})
export class ItemModalComponent {
  // Services
  private ref = inject(DynamicDialogRef);

  protected text = signal<string | undefined>(undefined);

  protected close(success: boolean = false): void {
    this.ref.close(success);
  }

  public doText = effect(() => {
    console.log('asdasd', this.text());
  });
}
