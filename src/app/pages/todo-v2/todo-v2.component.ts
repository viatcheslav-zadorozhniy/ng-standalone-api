import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-todo-v2',
  templateUrl: './todo-v2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'page-container'
  },
})
export class TodoV2Component {}
