import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from '../../core/auth/auth.service';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions); 
  private readonly authService = inject(AuthService); 

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map(token => AuthActions.loginSuccess(token)),
          catchError(error => of(AuthActions.loginFailure({ error: error.message })))
        )
      )
    )
  );
}
