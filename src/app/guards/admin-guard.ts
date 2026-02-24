import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const admin: CanActivateFn = () => {
  const router = inject(Router);
  const user = localStorage.getItem('currentUser');

  if (!user) return router.createUrlTree(['/login']);

  const parsedUser = JSON.parse(user);

  return parsedUser.role === 'admin'
    ? true
    : router.createUrlTree(['/products']);
};