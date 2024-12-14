import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./app_modules/authentication/authentication.routes').then(m => m.routes),
  },
  {
    path: 'profile',
    loadChildren: () => import('./app_modules/profile/profile.routes').then(m => m.routes),
  },
  {
    path: 'verification',
    loadChildren: () => import('./app_modules/verification/verification.routes').then(m => m.routes),
  },
  {
    path: '**', // Wildcard route for a 404 page
    redirectTo: 'authentication/signin', // Or any default page you'd like to direct to
  }
];
