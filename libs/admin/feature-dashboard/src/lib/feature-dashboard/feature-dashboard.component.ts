import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@portfolio-pulse/admin-domain';

@Component({
  selector: 'lib-feature-dashboard',
  imports: [CommonModule],
  templateUrl: './feature-dashboard.component.html',
  styleUrl: './feature-dashboard.component.css',
})
export class FeatureDashboardComponent {
  authService = inject(AuthService);
}
