import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'page-container'
  },
})
export class TodoComponent {
}
