import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ManageAgentRegistrationComponent } from './modules/manage-agent-registration/manage-agent-registration.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manager-agent',
        component: ManageAgentRegistrationComponent,
      },
      {
        path: '',
        redirectTo: 'manager-agent',
        pathMatch: 'full',
      },
    ],
  },
];
