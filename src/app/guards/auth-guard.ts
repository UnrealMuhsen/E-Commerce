import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';



export const loggedOut: CanActivateFn = () => {
  const router = inject(Router);
  const x = localStorage.getItem('currentUser');

  return x ? router.createUrlTree(['/products']) : true;
};


export const loggedIn: CanActivateFn = () => {
  const router = inject(Router);
  const x = localStorage.getItem('currentUser');

  return x ? true : router.createUrlTree(['/login']);
};