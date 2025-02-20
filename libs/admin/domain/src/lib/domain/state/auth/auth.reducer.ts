import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  access_token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  access_token: null,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { access_token }) => ({ ...state, access_token, error: null })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error }))
);
