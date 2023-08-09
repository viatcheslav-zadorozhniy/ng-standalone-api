import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagsService {
  hasPermission(permission: string): boolean {
    return !!localStorage.getItem(permission);
  }
}
