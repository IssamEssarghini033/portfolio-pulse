import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '@portfolio-pulse/admin-domain';


@Component({
  selector: 'lib-feature-login',
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './feature-login.component.html',
  styleUrl: './feature-login.component.css',
})
export class FeatureLoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  
  email = '';
  password = '';


  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('access_token', res.access_token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => console.error(err),
    });
  }
}
