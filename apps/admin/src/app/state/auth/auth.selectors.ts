import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthToken = createSelector(
  selectAuthState,
  (state) => state.access_token
);

export const isAuthenticated = createSelector(
  selectAuthToken,
  (token) => !!token 
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error
);
