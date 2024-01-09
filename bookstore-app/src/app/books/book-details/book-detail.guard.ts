import { CanActivateFn } from '@angular/router';

export const bookDetailGuard: CanActivateFn = (route, state) => {
  return true;
};
