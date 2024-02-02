import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './todo-v2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'page-container'
  },
})
export class TodoV2Component {
}
