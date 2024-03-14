import { Injectable } from '@angular/core';

type FeatureFlag = 'todo-v2';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagsService {
  hasFeature(feature: FeatureFlag): boolean {
    return !!localStorage.getItem(feature);
  }

  toggleFeature(feature: FeatureFlag) {
    if (this.hasFeature(feature)) {
      localStorage.removeItem(feature);
    } else {
      localStorage.setItem(feature, 'true');
    }
  }
}
