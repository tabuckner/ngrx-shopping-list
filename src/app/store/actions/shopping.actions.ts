import { createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';


export const addShoppingItem = createAction('[SHOPPING] Add Item', props<{ payload: ShoppingItem }>());
export const removeShoppingItem = createAction('[SHOPPING] Remove Item', props<{ id: string }>());
