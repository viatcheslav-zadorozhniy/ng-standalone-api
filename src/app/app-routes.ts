import { Routes } from '@angular/router';
import { inject } from '@angular/core';

import { FeatureFlagsService } from './services';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },

  {
    path: 'about',
    providers: [], // An array of providers to use for this route and its children.
    loadComponent: () => import('./pages/about'), // Router automatically unwraps dynamic import() with default export.
  },

  // Utilize canMatch guard to switch routed components based on some conditions.
  {
    path: 'todo',
    canMatch: [ // Alternative to `canLoad` and `canActivate` guards.
      () => inject(FeatureFlagsService).hasPermission('todo-v2')
    ],
    loadComponent: () => import('./pages/todo-v2'),
  },
  {
    path: 'todo',
    loadComponent: () => import('./pages/todo').then(module => module.TodoComponent),
  },

  // Lazy loading many routes at once.
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/routes'),
  },

  {
    path: 'ng-next',
    loadComponent: () => import('./pages/ng-next'),
  },
];
