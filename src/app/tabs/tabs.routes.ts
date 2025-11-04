import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ProjectDetailComponent } from '../features/projects/pages/project-detail/project-detail.component';
import { TaskDetailComponent } from '../features/tasks/pages/task-detail/task-detail.component';

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
        path: 'projects/:id',
        component: ProjectDetailComponent,
      },
      {
        path: 'tasks',
        loadComponent: () =>
          import('../features/tasks/tasks.component').then(
            (m) => m.TasksComponent
          ),
      },
      {
        path: 'tasks/:id',
        component: TaskDetailComponent,
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
