import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as ShoppingActions from '../actions/shopping.actions';
import { ShoppingService } from 'src/app/shopping.service';



@Injectable()
export class ShoppingEffects {
  loadShoppingItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShoppingActions.loadShoppingItems),
      switchMap(() =>
        this.shoppingService.getShoppingItems().pipe(
          map(data => ShoppingActions.loadShoppingItemsSuccess({ payload: data })),
          catchError(error => of(ShoppingActions.loadShoppingItemsFailure({ payload: error }))))
      ),
    );
  });

  addShoppingItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShoppingActions.addShoppingItem),
      switchMap(({ payload }) =>
        this.shoppingService.addShoppingItem(payload).pipe(
          map(data => ShoppingActions.addShoppingItemSuccess({ payload: data })),
          catchError(error => of(ShoppingActions.addShoppingItemFailure({ payload: error }))))
      ),
    );
  });

  deleteShoppingItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShoppingActions.deleteShoppingItem),
      switchMap(({ id }) =>
        this.shoppingService.deleteShoppingItem(id).pipe(
          map(data => ShoppingActions.deleteShoppingItemSuccess({ id })),
          catchError(error => of(ShoppingActions.deleteShoppingItemFailure({ payload: error }))))
      ),
    );
  });



  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService,
  ) { }

}
