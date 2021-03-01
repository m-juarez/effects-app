import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as usuariosActions from '../actions';


@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}


  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType( usuariosActions.cargarUsuario ),
      mergeMap(
        (action) => this.usuarioService.getUser(action.id)
                  .pipe(
                    map( user => usuariosActions.cargarUsuarioSuccess({ usuario: user })),
                    catchError( err => of (usuariosActions.cargarUsuarioError({ payload: err })))
                  )
      )
    )
  );

}
