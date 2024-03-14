import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { User } from '../../domain';
import { UserComponent } from '../../ui';

@Component({
  standalone: true,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    UserComponent,
  ],
})
export class UsersComponent {
  readonly users$ = inject(HttpClient).get<User[]>('https://jsonplaceholder.typicode.com/users');
}
