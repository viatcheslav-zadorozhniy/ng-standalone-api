import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeferredComponent } from './ui';

@Component({
  standalone: true,
  templateUrl: './ng-next.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'page-container'
  },
  imports: [
    DeferredComponent,
  ],
})
export class NgNextComponent {
  firstCondition = false;
  secondCondition = false;

  changeCondition(): void {
    this.secondCondition = true;
  }
}
