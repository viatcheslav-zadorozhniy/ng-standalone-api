import { Routes } from '@angular/router';

const ADMIN_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: 'users',
    loadComponent: () => import('../users'),
  },
];

export default ADMIN_ROUTES;
