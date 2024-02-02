import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-deferred',
  templateUrl: './deferred.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
  ],
})
export class DeferredComponent {
  readonly form = inject(FormBuilder).group<{ name: string; email: string; }>({
    name: '',
    email: '',
  });
}
