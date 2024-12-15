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
        path: 'tasks',
        loadComponent: () =>
          import('../features/tasks/tasks.component').then(
            (m) => m.TasksComponent
          ),
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
