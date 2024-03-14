import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { User } from '../../domain';

@Component({
  standalone: true,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  readonly user = input.required<User>();
}
