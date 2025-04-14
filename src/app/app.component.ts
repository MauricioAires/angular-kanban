import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    TooltipModule,
    PanelMenuModule,
    BadgeModule,
    RippleModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  protected items!: MenuItem[];

  protected menu = signal<number[]>(Array(19).fill(0));

  public ngOnInit() {
    this.items = [
      {
        label: 'Mail',
        icon: 'pi pi-envelope',
        badge: '5',
        items: [
          {
            label: 'Compose',
            icon: 'pi pi-file-edit',
            shortcut: '⌘+N',
          },
          {
            label: 'Inbox',
            icon: 'pi pi-inbox',
            badge: '5',
          },
          {
            label: 'Sent',
            icon: 'pi pi-send',
            shortcut: '⌘+S',
          },
          {
            label: 'Trash',
            icon: 'pi pi-trash',
            shortcut: '⌘+T',
          },
        ],
      },
      {
        label: 'Reports',
        icon: 'pi pi-chart-bar',
        shortcut: '⌘+R',
        items: [
          {
            label: 'Sales',
            icon: 'pi pi-chart-line',
            badge: '3',
          },
          {
            label: 'Products',
            icon: 'pi pi-list',
            badge: '6',
          },
        ],
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        shortcut: '⌘+W',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O',
          },
          {
            label: 'Privacy',
            icon: 'pi pi-shield',
            shortcut: '⌘+P',
          },
        ],
      },
    ];
  }

  toggleAll() {
    const expanded = !this.areAllItemsExpanded();
    this.items = this.toggleAllRecursive(this.items, expanded);
  }

  private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
    return items.map((menuItem) => {
      menuItem.expanded = expanded;
      if (menuItem.items) {
        menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
      }
      return menuItem;
    });
  }

  private areAllItemsExpanded(): boolean {
    return this.items.every((menuItem) => menuItem.expanded);
  }
}
