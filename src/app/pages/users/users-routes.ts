import { Routes } from '@angular/router';

const usersRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./users.component').then(mod => mod.UsersComponent),
  },
];

export default usersRoutes;
