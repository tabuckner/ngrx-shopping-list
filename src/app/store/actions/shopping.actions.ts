import { createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';
import { ShoppingState } from '../reducers/shopping-reducer.reducer';


export const loadShoppingItems = createAction('[SHOPPING] Load Shopping Items');
export const loadShoppingItemsSuccess = createAction('[SHOPPING] Load Shopping Items Success', props<{ payload: Array<ShoppingItem> }>());
export const loadShoppingItemsFailure = createAction('[SHOPPING] Load Shopping Items Failure', props<{payload: Error}>());

export const addShoppingItem = createAction('[SHOPPING] Add Shopping Item', props<{ payload: ShoppingItem }>());
export const addShoppingItemSuccess = createAction('[SHOPPING] Add Shopping Item Success', props<{ payload: Array<ShoppingItem> }>());
export const addShoppingItemFailure = createAction('[SHOPPING] Add Shopping Item Failure', props<{payload: Error}>());

export const deleteShoppingItem = createAction('[SHOPPING] Delete Shopping Item', props<{ id: string }>());
export const deleteShoppingItemSuccess = createAction('[SHOPPING] Delete Shopping Item Success', props<{ payload: Array<ShoppingItem> }>());
export const deleteShoppingItemFailure = createAction('[SHOPPING] Delete Shopping Item Failure', props<{payload: Error}>());
