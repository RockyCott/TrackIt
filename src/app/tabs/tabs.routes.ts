import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'projects',
        loadComponent: () =>
          import('../features/projects/projects.component').then(
            (m) => m.ProjectsComponent
          ),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../features/profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
      },
      {
        path: '',
        redirectTo: '/dashboard/projects',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard/projects',
    pathMatch: 'full',
  },
];
