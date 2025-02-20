import { Routes } from '@angular/router';
import { AuthGuard } from '@portfolio-pulse/admin-domain';
import { FeatureLoginComponent } from '@portfolio-pulse/feature-login';


export const routes: Routes = [
    { path: 'login', component: FeatureLoginComponent },
    {
      path: '',
      canActivate: [AuthGuard],
      children: [
        {
          path: 'dashboard', 
          loadComponent: () => import('@portfolio-pulse/feature-dashboard').then(m => m.FeatureDashboardComponent) },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: '**', redirectTo: '/dashboard' },

      ]
    }
  ];