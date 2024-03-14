import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { FeatureFlagsService } from '../../services';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
})
export class HeaderComponent {
  readonly menuItems = [
    { link: '/', title: 'Home' },
    { link: '/users', title: 'Users' },
    { link: '/todo', title: 'Todo' },
  ];

  #router = inject(Router);
  #featureFlagsService = inject(FeatureFlagsService);

  hasTodoV2Feature(): boolean {
    return this.#featureFlagsService.hasFeature('todo-v2');
  }

  toggleTodoV2Feature() {
    this.#featureFlagsService.toggleFeature('todo-v2');

    if (this.#router.url === '/todo') {
      // Reload the route to get a relevant component based on the feature flag state.
      this.#router.navigateByUrl(this.#router.url, {
        onSameUrlNavigation: 'reload'
      });
    }
  }
}
