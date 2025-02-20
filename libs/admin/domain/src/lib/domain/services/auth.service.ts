import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly jwtHelper = new JwtHelperService();
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  host = "http://localhost:3000";

  login(email: string, password: string) {
    return this.http.post<{ access_token: string }>(`${this.host}/auth/login`, { email, password });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
}