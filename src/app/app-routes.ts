import { Routes } from '@angular/router';
import { inject } from '@angular/core';

import { FeatureFlagsService } from './services';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    providers: [], // An array of providers to use for this route and its children.
    loadComponent: () => import('./pages/home'), // Router automatically unwraps dynamic import() with default export.
  },

  // Utilize canMatch guard to switch routed components based on some conditions.
  {
    path: 'todo',
    canMatch: [ // Alternative to `canLoad` and `canActivate` guards.
      () => inject(FeatureFlagsService).hasFeature('todo-v2')
    ],
    loadComponent: () => import('./pages/todo-v2'),
  },
  {
    path: 'todo',
    loadComponent: () => import('./pages/todo'),
  },

  // Lazy loading routes.
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users-routes'),
  },
];
