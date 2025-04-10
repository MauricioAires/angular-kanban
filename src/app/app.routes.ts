import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ManageAgentRegistrationComponent } from './modules/manage-agent-registration/manage-agent-registration.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manager-agent',
        loadComponent: () =>
          import(
            './modules/manage-agent-registration/manage-agent-registration.component'
          ).then((c) => c.ManageAgentRegistrationComponent),
      },
      {
        path: '',
        redirectTo: 'manager-agent',
        pathMatch: 'full',
      },
    ],
  },
];
